import { appApi } from "@shared/api/appApi"
import { Actor } from "../model/actor.types"

export const actorApi = appApi.injectEndpoints({
	endpoints: builder => ({
		getAllActors: builder.query<
			Actor[],
			{ searchTerm?: string; limit?: number } | undefined
		>({
			query: params => ({
				url: "/actors",
				params: params?.searchTerm
					? { searchTerm: params.searchTerm }
					: {},
			}),
			transformResponse(actors: Actor[], meta, arg) {
				if (Array.isArray(actors)) {
					return arg?.limit ? actors.slice(0, arg?.limit) : actors
				}
				return actors
			},
			providesTags: (result, error, arg) => {
				let actors: { type: "Actor"; id: string }[] = []
				if (result)
					actors = result.map(a => ({ type: "Actor", id: a._id }))
				return [...actors, "Actor"]
			},
		}),
		getActorById: builder.query<Actor, string>({
			query: id => `/actors/${id}`,
			providesTags: (result, error, id) => [{ type: "Actor", id }],
		}),
		getActorBySlug: builder.query<Actor, string>({
			query: slug => `/actors/by-slug/${slug}`,
			providesTags: (result, error, id) => [
				result ? { type: "Actor", id: result._id } : "Actor",
			],
		}),

		createActor: builder.mutation<string, void>({
			query: () => ({
				url: `/actors`,
				method: "POST",
			}),
			invalidatesTags: ["Actor"],
		}),
		updateActor: builder.mutation<string, Omit<Actor, "countMovies">>({
			query: actor => ({
				url: `actors/${actor._id}`,
				method: "PUT",
				body: actor,
			}),
			invalidatesTags: (result, error, actor) => [
				{ type: "Actor", id: actor._id },
			],
		}),
		deleteActor: builder.mutation<string, string>({
			query: id => ({
				url: `/actors/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Actor", id }],
		}),
	}),
})

export const {
	useGetAllActorsQuery,
	useGetActorByIdQuery,
	useGetActorBySlugQuery,
	useDeleteActorMutation,
	useCreateActorMutation,
	useUpdateActorMutation,
} = actorApi
export const { getAllActors, getActorById, getActorBySlug } = actorApi.endpoints
