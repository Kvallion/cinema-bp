import { appApi } from "@shared/api/appApi"
import { Genre } from "../model/genre.types"

export const genreApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getAllGenres: builder.query<Genre[], string | undefined>({
			query: searchTerm => ({
				url: "/genres",
				params: searchTerm ? { searchTerm } : {},
			}),
			providesTags: (result, error, arg) =>
				result
					? [
							...result.map(({ _id }) => ({
								type: "Genre" as const,
								id: _id,
							})),
							"Genre",
					  ]
					: ["Genre"],
		}),
		getPopularGenres: builder.query<Genre[], void>({
			query: () => "/genres",
			transformResponse: (data: Genre[]) => data.slice(0, 10),
		}),

		deleteGenre: builder.mutation<string, string>({
			query: id => ({
				url: `genres/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Genre", id }],
		}),
	}),
})

export const {
	useGetAllGenresQuery,
	useGetPopularGenresQuery,
	useDeleteGenreMutation,
} = genreApi
export const { getAllGenres, getPopularGenres } = genreApi.endpoints
