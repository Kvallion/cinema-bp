import { RootState } from "@app/store"
import { User } from "@entities/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthSliceState {
	user: User | null
	accessToken: string | null
	refreshToken: string | null
}

const initialState: AuthSliceState = {
	accessToken: null,
	refreshToken: null,
	user: null,
}

const authSlice = createSlice({
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
})

export const { logout, setCredentials } = authSlice.actions

export const AuthReducer = authSlice.reducer

export const selectAuthData = (state: RootState) => state.auth
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectAccessToken = (state: RootState) => state.auth.accessToken
