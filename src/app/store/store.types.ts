import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import { makeConfiguredStore, makeStore } from "./store"

const fakeStore = configureStore({ reducer: rootReducer })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = (typeof fakeStore)["dispatch"]
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>
