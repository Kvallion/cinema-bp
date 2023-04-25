import {
	PayloadAction,
	bindActionCreators,
	createSlice,
} from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { useMemo } from "react"
import { AuthResonseUser } from "../api/responses.types"
import { useAppDispatch } from "@hooks/redux"
import { User } from "@entities/user"
import { RootState } from "@app/store"

interface AuthSliceState {
	user: AuthResonseUser | null
	accessToken: string | null
	refreshToken: string | null
}

const initialState: AuthSliceState = {
	accessToken: null,
	refreshToken: null,
	user: null,
}

export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials(
			state,
			{
				payload: { user, accessToken, refreshToken },
			}: PayloadAction<AuthSliceState>
		) {
			state.user = user
			state.accessToken = accessToken
			state.refreshToken = refreshToken
		},
		logout(state) {
			state.user = null
			state.accessToken = null
			state.refreshToken = null
		},
	},
	extraReducers(builder) {
		builder.addCase<
			typeof HYDRATE,
			PayloadAction<RootState, typeof HYDRATE>
		>(HYDRATE, (state, { payload }) => ({ ...state, ...payload.auth }))
	},
})

export const { logout, setCredentials } = AuthSlice.actions

export const useAuthActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(
		() => bindActionCreators(AuthSlice.actions, dispatch),
		[dispatch]
	)
}

export const selectAuthData = (state: RootState) => state.auth
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectAccessToken = (state: RootState) => state.auth.accessToken
