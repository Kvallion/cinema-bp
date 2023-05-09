import { combineReducers } from "@reduxjs/toolkit"
import { reducer as ToastReducer } from "react-redux-toastr"
import { appApi } from "@shared/api/appApi"
import { LayoutSlice } from "@app/model/LayoutSlice"
import { AuthFormSlice, AuthSlice } from "@features/authorization"

export const rootReducer = combineReducers({
	[AuthSlice.name]: AuthSlice.reducer,
	[AuthFormSlice.name]: AuthFormSlice.reducer,
	[LayoutSlice.name]: LayoutSlice.reducer,
	toastr: ToastReducer,
	[appApi.reducerPath]: appApi.reducer,
})
