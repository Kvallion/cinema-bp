import { appApi } from "@shared/api/appApi"
import build from "next/dist/build"
import { toastr } from "react-redux-toastr"
import { Movie } from "../model/movie.types"

const movieApi = appApi.injectEndpoints({
	endpoints: (build) => ({
		getAllMovies: build.query<Movie[], string | undefined>({
			query: (searchTerm?) => ({
				url: "/movies",
				params: { searchTerm },
			}),
		}),
		getPopularMovies: build.query<Movie[], void>({
			query: () => "/movies/most-popular",
			transformResponse: (movies: Movie[]) => movies.slice(0, 3),
			transformErrorResponse(error: any, meta) {
				toastr.error(
					"Faild to fetch popular movies",
					(error.error as string) || ""
				)
				return error
			},
		}),
	}),
})

export const { useGetAllMoviesQuery, useGetPopularMoviesQuery } = movieApi
export const { getAllMovies, getPopularMovies } = movieApi.endpoints
