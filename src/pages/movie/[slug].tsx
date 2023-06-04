import { GetStaticPaths, NextPage } from "next"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import { PageMeta } from "@shared/components/PageMeta"
import { AppStore, makeStore, wrapper } from "@app/store"
import { MovieBanner } from "@widgets/MovieBanner"
import {
	getAllMovies,
	getMovieBySlug,
	useGetMovieBySlugQuery,
} from "@entities/movie"

const LazyRateMovie = dynamic(
	async () => (await import("@features/rating")).RateMovie,
	{ ssr: false }
)

const MoviePage: NextPage = () => {
	const { query } = useRouter()
	const slug = query.slug as string
	const { data: movie } = useGetMovieBySlugQuery(slug)

	return (
		<div className="xs:px-4 py-5 md:p-layout">
			<PageMeta
				title={movie?.title || "Loading..."}
				description={movie?.description}
			/>

			{movie && <MovieBanner movie={movie} />}

			<div className="px-4 xs:px-0">
				<LazyRateMovie movieId={movie!._id} slug={movie!.slug} />
			</div>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async context => {
	try {
		const store = makeStore(context)
		const { data: movies } = await store.dispatch(getAllMovies.initiate(_))

		const paths = movies?.map(({ slug }) => ({ params: { slug } })) || []

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
		await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getMovieBySlug.initiate(slug)),
		])
		return {
			props: {},
		}
	}
)

export default MoviePage
