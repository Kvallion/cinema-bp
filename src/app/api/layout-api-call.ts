import { AppDispatch } from "@app/store"
import { getPopularGenres } from "@entities/genre"
import { getPopularMovies } from "@entities/movie"

export default async function layoutApiCall(dispatch: AppDispatch) {
	await dispatch(getPopularGenres.initiate())
	await dispatch(getPopularMovies.initiate())
}
