import layoutApiCall from "@app/api/layout-api-call";
import { useGetFavoritesQuery } from "@entities/user";
import MovieGrid from "@entities/movie/components/MovieGrid";
import { PageMeta } from "@shared/components/PageMeta";
import { PageHeading } from "@ui/PageHeading";
import { AppStore, wrapper } from "@app/store";
import { NextPageAuth } from "@features/authorization";
import { getPopularMovies } from "@entities/movie";


const FavoritesPage: NextPageAuth = () => {
	const { data: movies } = useGetFavoritesQuery()

	return (
		<div className="px-4 py-5 md:p-layout">
			<PageMeta title="Favorite movies" />

			<PageHeading className="mb-6">Your Favorites</PageHeading>

			<MovieGrid movies={movies || []} />
		</div>
	)
}
FavoritesPage.onlyUser = true

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

export default FavoritesPage