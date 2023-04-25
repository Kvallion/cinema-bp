import { NextPage } from "next"
import dynamic from "next/dynamic"
import layoutApiCall from "@app/api/layout-api-call"
import { getAllActors } from "@entities/actor/api/actorApi"
import { _ } from "@shared/consts/utility"
import { PageMeta } from "@shared/components/PageMeta"
import { PageHeading } from "@ui/PageHeading"
import { SectionHeading } from "@ui/SectionHeading"
import { AppStore, wrapper } from "@app/store"
import { ActorCarousel } from "@features/ActorCarousel"
import { MovieCarousel } from "@features/MovieCarousel"
import { TrendingMoviesCarousel } from "@features/TrendingMoviesCarousel"
import { getAllMovies, useGetAllMoviesQuery } from "@entities/movie"

// const LazyMovieCarousel = dynamic(
// 	async () => (await import("@features/MovieCarousel")).MovieCarousel,
// 	{ ssr: false }
// )

const HomePage: NextPage = () => {
	const { data: movies } = useGetAllMoviesQuery(_)
	return (
		<div className="px-0 py-5 md:py-layout md:px-layout">
			<PageMeta
				title="Watch movies online"
				description="Watch movies and TV shows online or stream right to your browser"
			/>
			<PageHeading className="mb-8 px-4 md:px-0">
				Watch movies online
			</PageHeading>
			<MovieCarousel movies={movies || []} className="mb-10" />

			<div className="px-4 md:px-0">
				<TrendingMoviesCarousel className="mb-10" />
				<ActorCarousel />
			</div>
		</div>
	)
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await layoutApiCall(store.dispatch)
		await store.dispatch(getAllMovies.initiate(_))
		await store.dispatch(getAllActors.initiate())

		return {
			props: {},
		}
	}
)

export default HomePage
