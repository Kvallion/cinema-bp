import { createApi } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"
import { baseQueryWithReAuth } from "@features/authorization/api/authBaseQuery"

export const appApi = createApi({
	baseQuery: baseQueryWithReAuth,
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	tagTypes: ["User", "Genre", "Actor", "Movie"],
	endpoints: builder => ({}),
})
