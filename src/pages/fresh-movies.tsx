import { NextPage } from "next"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import MovieGrid from "@entities/movie/components/MovieGrid"
import { PageMeta } from "@shared/components/PageMeta"
import { PageHeading } from "@ui/PageHeading"
import { PageP } from "@ui/PageP"
import { AppStore, wrapper } from "@app/store"
import { getAllMovies, useGetAllMoviesQuery } from "@entities/movie"

const FreshMoviesPage: NextPage = () => {
	const { data: movies } = useGetAllMoviesQuery(_)
	return (
		<div className="px-4 py-5 md:p-layout">
			<PageMeta title="Fresh movies" description={description} />

			<PageHeading className="mb-3">Fresh movies</PageHeading>
			<PageP className="mb-10">{description}</PageP>
			<MovieGrid movies={movies || []} />
		</div>
	)
}
const description =
	"Fresh movies and series in excellent quality: legal, safe, without ads."

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getAllMovies.initiate(_)),
		])
		return {
			props: {},
		}
	}
)

export default FreshMoviesPage
