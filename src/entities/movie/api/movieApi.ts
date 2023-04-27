import build from "next/dist/build"
import { toastr } from "react-redux-toastr"
import { appApi } from "@shared/api/appApi"
import { Movie } from "../model/movie.types"

const movieApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getAllMovies: builder.query<Movie[], string | undefined>({
			query: (searchTerm?) => ({
				url: "/movies",
				params: { searchTerm },
			}),
			providesTags: (result, error, arg) => {
				let movies: { type: "Movie"; id: string }[] = []
				if (result)
					movies = result.map(m => ({ type: "Movie", id: m._id }))
				return [...movies, "Movie"]
			},
		}),
		getPopularMovies: builder.query<Movie[], void>({
			query: () => "/movies/most-popular",
			transformResponse: (movies: Movie[]) => movies.slice(0, 3),
			transformErrorResponse(error: any, meta) {
				toastr.error(
					"Failed to fetch popular movies",
					(error.error as string) || ""
				)
				return error
			},
		}),

		deleteMovie: builder.mutation<string, string>({
			query: id => ({
				url: `genres/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Genre", id }],
		}),
	}),
})

export const {
	useGetAllMoviesQuery,
	useGetPopularMoviesQuery,
	useDeleteMovieMutation,
} = movieApi

export const { getAllMovies, getPopularMovies } = movieApi.endpoints
