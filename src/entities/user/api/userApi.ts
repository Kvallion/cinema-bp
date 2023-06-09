import { toastr } from "react-redux-toastr"
import { appApi } from "@shared/api/appApi"
import { User } from "../model/user.types"
import { toastError } from "@shared/lib/helper/toasts/toastError"
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
			providesTags: (result, error, arg) => {
				let users: { type: "User"; id: string }[] = []
				if (result)
					users = result.map(u => ({ type: "User", id: u._id }))
				return [...users, "User"]
			},
		}),
		getUserProfile: builder.query<User, void>({
			query: () => "/users/profile",
		}),

		deleteUser: builder.mutation<string, string>({
			query: id => ({
				url: `users/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "User", id }],
		}),

		getFavorites: builder.query<Movie[], void>({
			query: () => "/users/profile/favorites",
		}),
		toggleFavorites: builder.mutation<void, string>({
			query: movieId => ({
				url: "/users/profile/favorites",
				method: "POST",
				body: { movieId },
			}),
			transformErrorResponse(error: any, meta) {
				toastr.error(
					"Failed to update favorites",
					(error.error as string) || ""
				)
				return error
			},
		}),
	}),
})

export const {
	useGetUserProfileQuery,
	useGetFavoritesQuery,
	useToggleFavoritesMutation,
	useGetUsersCountQuery,
	useGetAllUsersQuery,
	useDeleteUserMutation,
} = userApi
export const { getUserProfile, getFavorites } = userApi.endpoints
