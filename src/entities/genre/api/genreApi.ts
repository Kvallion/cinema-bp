import { appApi } from "@shared/api/appApi"
import { Collection, Genre } from "../model/genre.types"

export const genreApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getAllGenres: builder.query<Genre[], string | undefined>({
			query: searchTerm => ({
				url: "/genres",
				params: searchTerm ? { searchTerm } : {},
			}),
			providesTags: (result, error, arg) => {
				let genres: { type: "Genre"; id: string }[] = []
				if (result)
					genres = result.map(g => ({ type: "Genre", id: g._id }))
				return [...genres, "Genre"]
			},
		}),
		getGenreById: builder.query<Genre, string>({
			query: id => `/genres/${id}`,
			providesTags: (result, error, id) => [{ type: "Genre", id }],
		}),
		getPopularGenres: builder.query<Genre[], void>({
			query: () => "/genres",
			transformResponse: (data: Genre[]) => data.slice(0, 10),
		}),
		getGenreMoviesCollections: builder.query<Collection[], void>({
			query: () => "/genres/collections",
			providesTags: (result, error, arg) => {
				let collections: { type: "Collection"; id: string }[] = []
				if (result)
					collections = result.map(c => ({
						type: "Collection",
						id: c._id,
					}))
				return [...collections, "Collection"]
			},
		}),

		createGenre: builder.mutation<string, void>({
			query: () => ({
				url: "/genres",
				method: "POST",
			}),
			invalidatesTags: ["Genre"],
		}),
		updateGenre: builder.mutation<string, Genre>({
			query: genre => ({
				url: `genres/${genre._id}`,
				method: "PUT",
				body: genre,
			}),
			invalidatesTags: (result, error, genre) => [
				{ type: "Genre", id: genre._id },
				"Collection",
			],
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
	useGetGenreByIdQuery,
	useGetPopularGenresQuery,
	useGetGenreMoviesCollectionsQuery,
	useCreateGenreMutation,
	useDeleteGenreMutation,
	useUpdateGenreMutation,
} = genreApi
export const {
	getAllGenres,
	getGenreById,
	getPopularGenres,
	getGenreMoviesCollections,
} = genreApi.endpoints
