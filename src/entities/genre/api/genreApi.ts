import { appApi } from "@shared/api/appApi"
import { Genre } from "../model/genre.types"

export const genreApi = appApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllGenres: builder.query<Genre[], void>({
			query: () => "/genres",
		}),
		getPopularGenres: builder.query<Genre[], void>({
			query: () => "/genres",
			transformResponse: (data: Genre[]) => data.slice(0, 10),
		}),
	}),
})

export const { useGetAllGenresQuery, useGetPopularGenresQuery } = genreApi
export const { getAllGenres, getPopularGenres } = genreApi.endpoints
