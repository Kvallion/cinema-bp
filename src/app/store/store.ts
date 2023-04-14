import { configureStore, Store, ThunkAction } from "@reduxjs/toolkit"
import { Action } from "redux"
import { reducer as ToastReducer } from "react-redux-toastr"
import { Context, createWrapper } from "next-redux-wrapper"
import { appApi } from "@shared/api/appApi"

const createStore = (ctx?: Context) =>
	configureStore({
		reducer: {
			// user: UserReducer,
			toastr: ToastReducer,
			[appApi.reducerPath]: appApi.reducer,
		},
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware().concat(appApi.middleware)
		},
		devTools: process.env.NODE_ENV !== "production",
	})

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>

export const wrapper = createWrapper<Store<RootState>>(createStore)
