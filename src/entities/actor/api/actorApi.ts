import { appApi } from "@shared/api/appApi"
import { Actor } from "../model/actor.types"

export const actorApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getAllActors: builder.query<Actor[], void>({
			query: () => "/actors",
		}),
	}),
})

export const { useGetAllActorsQuery } = actorApi
export const { getAllActors } = actorApi.endpoints
