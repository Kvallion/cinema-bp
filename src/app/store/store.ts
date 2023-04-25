import { rootReducer } from "./rootReducer"
import { AppStore } from "./store.types"
import { configureStore } from "@reduxjs/toolkit"
import {
	nextReduxCookieMiddleware,
	wrapMakeStore,
} from "next-redux-cookie-wrapper"
import { createWrapper } from "next-redux-wrapper"
import { appApi } from "@shared/api/appApi"
import { AuthFormSlice } from "@features/authorization/model/authFormSlice"
import { AuthSlice } from "@features/authorization/model/authSlice"

export const makeStore = wrapMakeStore(() =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware()
				.prepend(
					nextReduxCookieMiddleware({
						subtrees: [AuthSlice.name, AuthFormSlice.name],
					})
				)
				.concat(appApi.middleware),
	})
)

export const wrapper = createWrapper<AppStore>(makeStore)
