import { baseQueryWithReAuth } from "@features/authorization"
import { createApi } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"

export const appApi = createApi({
	baseQuery: baseQueryWithReAuth,
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	endpoints: (builder) => ({}),
})
