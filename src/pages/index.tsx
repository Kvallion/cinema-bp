import { NextPage } from "next"
import { useEffect, useState } from "react"
import layoutApiCall from "@app/api/layout-api-call"
import {
	getAllActors,
	useGetAllActorsQuery,
} from "@entities/actor/api/actorApi"
import { _ } from "@shared/consts/utility"
import { PageMeta } from "@shared/components/PageMeta"
import { PageHeading } from "@ui/PageHeading"
import { AppStore, wrapper } from "@app/store"
import { ActorCarousel } from "@features/ActorCarousel"
import { MovieCarousel } from "@features/MovieCarousel"
import { TrendingMoviesCarousel } from "@features/TrendingMoviesCarousel"
import { usePopularActors } from "@entities/actor"
import { getPopularMovies, useGetPopularMoviesQuery } from "@entities/movie"

const HomePage: NextPage = () => {
	const { data: movies } = useGetPopularMoviesQuery()
	const { data: actors } = useGetAllActorsQuery(_)
	console.log("actors", actors)
	const popularActors = usePopularActors(actors)

	return (
		<div className="px-0 py-5 md:p-layout">
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
				<ActorCarousel
					title="Popular actors"
					actors={popularActors}
					getSubtitle={a => `${a.countMovies} movies`}
				/>
			</div>
		</div>
	)
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getPopularMovies.initiate()),
			store.dispatch(getAllActors.initiate(_)),
		])

		return {
			props: {},
		}
	}
)

export default HomePage
