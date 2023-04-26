import { appApi } from "@shared/api/appApi"
import { User } from "../model/user.types"
import { Movie } from "@entities/movie"

export const userApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getUsersCount: builder.query<number, void>({
			query: () => "/users/count",
		}),
		getAllUsers: builder.query<User[], string | undefined>({
			query: searchTerm => ({
				url: "/users",
				params: searchTerm ? { searchTerm } : {},
			}),
			providesTags: (result, error, arg) =>
				result
					? [
							...result.map(({ _id }) => ({
								type: "User" as const,
								id: _id,
							})),
							"User",
					  ]
					: ["User"],
		}),
		getUserProfile: builder.query<User, void>({
			query: () => "/users/profile",
		}),
		getFavorites: builder.query<Movie[], void>({
			query: () => "/users/profile/favorites",
		}),

		deleteUser: builder.mutation<string, string>({
			query: id => ({
				url: `users/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "User", id }],
		}),
	}),
})

export const {
	useGetUserProfileQuery,
	useGetFavoritesQuery,
	useGetUsersCountQuery,
	useGetAllUsersQuery,
	useDeleteUserMutation,
} = userApi
export const { getUserProfile } = userApi.endpoints
