import { Movie } from "@entities/movie"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"

export const appApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.APP_SERVER_URL + "/api",
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	endpoints: (builder) => ({}),
})
