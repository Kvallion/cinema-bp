import { NextPage } from "next"
import layoutApiCall from "@app/api/layout-api-call"
import MovieGrid from "@entities/movie/components/MovieGrid"
import { PageMeta } from "@shared/components/PageMeta"
import { PageHeading } from "@ui/PageHeading"
import { PageP } from "@ui/PageP"
import { AppStore, wrapper } from "@app/store"
import { getPopularMovies, useGetPopularMoviesQuery } from "@entities/movie"

const TrendingPage: NextPage = () => {
	const { data: movies } = useGetPopularMoviesQuery()
	return (
		<div className="px-4 py-5 md:p-layout">
			<PageMeta title="Trending now" description={description} />

			<PageHeading className="mb-3">Trending now</PageHeading>
			<PageP className="mb-10">{description}</PageP>
			<MovieGrid movies={movies || []} />
		</div>
	)
}
const description =
	"Trending movies and series in excellent quality: legal, safe, without ads."

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getPopularMovies.initiate()),
		])
		return {
			props: {},
		}
	}
)

export default TrendingPage
