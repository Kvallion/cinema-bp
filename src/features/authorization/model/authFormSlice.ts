import { RootState } from "@app/store"
import { useAppDispatch } from "@hooks/redux"
import {
	bindActionCreators,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { useMemo } from "react"
import { AuthForm } from "./types/auth.types"

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
})

export const useAuthFormActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(
		() => bindActionCreators(AuthFormSlice.actions, dispatch),
		[dispatch]
	)
}

export const selectAuthFormData = (state: RootState) => state.authForm
