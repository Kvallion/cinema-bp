import { AuthReducer } from "@features/authorization"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { appApi } from "@shared/api/appApi"
import { reducer as ToastReducer } from "react-redux-toastr"

export const rootReducer = combineReducers({
	auth: AuthReducer,
	toastr: ToastReducer,
	[appApi.reducerPath]: appApi.reducer,
})
