import { appApi } from "@shared/api/appApi"
import { User } from "../model/user.types"

export const userApi = appApi.injectEndpoints({
	endpoints: (builder) => ({
		getUserProfile: builder.query<User, void>({
			query: () => "/users/profile",
		}),
	}),
})

export const { useGetUserProfileQuery } = userApi
export const { getUserProfile } = userApi.endpoints
