import { RootState } from "@app/store"
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query"
import {
	logout,
	selectAccessToken,
	selectCurrentUser,
	setCredentials,
} from "../model/authSlice"
import { TokensResponse } from "./responses.types"

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.APP_SERVER_URL + "/api",
	prepareHeaders(headers, { getState }) {
		const token = selectAccessToken(getState() as RootState)
		if (token) {
			headers.set("authorization", `Bearer ${token}`)
		}
		return headers
	},
})

export const baseQueryWithReAuth: typeof baseQuery = async (
	args,
	api,
	extraOptions
) => {
	let result = await baseQuery(args, api, extraOptions)
	if (result?.error?.status === 401) {
		const refreshResult = await baseQuery("/refresh", api, extraOptions)
		if (!refreshResult?.data) {
			api.dispatch(logout())
		} else {
			const { accessToken, refreshToken } =
				refreshResult.data as TokensResponse

			const user = selectCurrentUser(api.getState() as RootState)

			api.dispatch(setCredentials({ accessToken, refreshToken, user }))

			result = await baseQuery(args, api, extraOptions)
		}
	}
	return result
}
