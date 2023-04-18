import { appApi } from "@shared/api/appApi"
import { AuthCredentials } from "../model/auth.types"
import { TokensResponse } from "./responses.types"

export const authApi = appApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<TokensResponse, AuthCredentials>({
			query: (credentials) => ({
				url: "auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
		register: builder.mutation<TokensResponse, AuthCredentials>({
			query: (credentials) => ({
				url: "auth/register",
				method: "POST",
				body: credentials,
			}),
			// transformResponse(tokens: RegisterResponse, meta, arg) {

			// },
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation } = authApi
