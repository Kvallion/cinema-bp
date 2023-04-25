import { AuthForm } from "./types/auth.types"
import {
	PayloadAction,
	bindActionCreators,
	createSlice,
} from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { useMemo } from "react"
import { useAppDispatch } from "@hooks/redux"
import { RootState } from "@app/store"

const initialState: AuthForm = {
	email: "",
	password: "",
}

export const AuthFormSlice = createSlice({
	name: "authForm",
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload
		},
		clear(state) {
			state.email = ""
			state.password = ""
		},
	},
	extraReducers(builder) {
		builder.addCase<
			typeof HYDRATE,
			PayloadAction<RootState, typeof HYDRATE>
		>(HYDRATE, (state, { payload }) => ({ ...state, ...payload.authForm }))
	},
})

export const useAuthFormActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(
		() => bindActionCreators(AuthFormSlice.actions, dispatch),
		[dispatch]
	)
}

export const selectAuthFormData = (state: RootState) => state.authForm
