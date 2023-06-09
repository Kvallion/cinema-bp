import parse from "html-react-parser"
import { GetStaticPaths, NextPage } from "next"
import { useRouter } from "next/router"
import { describe } from "node:test"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import MovieGrid from "@entities/movie/components/MovieGrid"
import { PageMeta } from "@shared/components/PageMeta"
import { PageHeading } from "@ui/PageHeading"
import { PageP } from "@ui/PageP"
import { AppStore, makeStore, wrapper } from "@app/store"
import {
	getAllGenres,
	getGenreBySlug,
	useGetGenreBySlugQuery,
} from "@entities/genre"
import { getMoviesByGenres, useGetMoviesByGenresQuery } from "@entities/movie"

const GenrePage: NextPage = () => {
	const { query } = useRouter()
	const slug = query.slug as string
	const { data: genre } = useGetGenreBySlugQuery(slug)
	const { data: movies } = useGetMoviesByGenresQuery([genre?._id || ""])

	return (
		<div className="px-4 py-5 md:p-layout">
			<PageMeta
				title={genre?.name || "Loading..."}
				description={genre?.name + "page"}
			/>

			<PageHeading className="mb-3">{genre?.name}</PageHeading>
			<PageP className="mb-10">{parse(genre?.description || "")}</PageP>

			<MovieGrid movies={movies || []} />
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async context => {
	try {
		const store = makeStore(context)
		const { data: genres } = await store.dispatch(getAllGenres.initiate(_))

		const paths = genres?.map(({ slug }) => ({ params: { slug } })) || []

		return { paths, fallback: "blocking" }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		const slug = ctx.params?.slug as string
		const [_, { data: genre }] = await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getGenreBySlug.initiate(slug)),
		])
		if (genre) {
			await store.dispatch(getMoviesByGenres.initiate([genre._id]))
		}
		return {
			props: {},
		}
	}
)

export default GenrePage
