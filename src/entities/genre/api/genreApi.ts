import { appApi } from "@shared/api/appApi"
import { Genre } from "../model/genre.types"

export const genreApi = appApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllGenres: builder.query<Genre[], void>({
			query: () => "/genres",
		}),
	}),
})

export const { useGetAllGenresQuery } = genreApi
export const { getAllGenres } = genreApi.endpoints
