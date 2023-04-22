import { appApi } from "@shared/api/appApi"
import { User } from "../model/user.types"
import { Movie } from "@entities/movie"

export const userApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getUserProfile: builder.query<User, void>({
			query: () => "/users/profile",
		}),
		getFavorites: builder.query<Movie[], void>({
			query: () => "/users/profile/favorites",
		}),
	}),
})

export const { useGetUserProfileQuery, useGetFavoritesQuery } = userApi
export const { getUserProfile } = userApi.endpoints
