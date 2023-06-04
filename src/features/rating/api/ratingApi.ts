import { toastr } from "react-redux-toastr"
import { appApi } from "@shared/api/appApi"

export const ratingApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getRatingById: builder.query<number, string>({
			query: slug => ({
				url: `/ratings/${slug}`,
			}),
			transformErrorResponse(error: any) {
				toastr.error(
					"Failed to fetch movie's rating",
					(error.error as string) || ""
				)
				return error
			},
			providesTags: (result, error, id) => [{ type: "Rating", id }],
		}),

		rateMovie: builder.mutation<string, { movieId: string; value: number }>(
			{
				query: body => ({
					url: "/ratings/set-rating",
					method: "POST",
					body,
				}),
				invalidatesTags: (result, error, arg) => [
					{ type: "Rating", id: arg.movieId },
				],
			}
		),
	}),
})

export const { useGetRatingByIdQuery, useRateMovieMutation } = ratingApi
export const { getRatingById } = ratingApi.endpoints
