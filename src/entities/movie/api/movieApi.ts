import { appApi } from "@shared/api/appApi"
import build from "next/dist/build"
import { Movie } from "../model/movie.types"

const movieApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		getAllMovies: build.query<Movie[], void>({
			query: () => "/movies",
		}),
	}),
})

export const { useGetAllMoviesQuery } = movieApi
export const { getAllMovies } = movieApi.endpoints
