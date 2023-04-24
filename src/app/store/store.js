import { configureStore } from "@reduxjs/toolkit"
import { appApi } from "@shared/api/appApi"
import storage from './syncStorage'
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"
import { rootReducer } from "./rootReducer"
import { createWrapper } from "next-redux-wrapper"

export const makeConfiguredStore = reducer => configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(appApi.middleware),
	devTools: process.env.NODE_ENV !== "production",
})

export const makeStore = ({ isServer }) => {
	if (true) {
		return makeConfiguredStore(rootReducer);
	} else {
		const { persistStore, persistReducer } = require('redux-persist');

		const persistConfig = {
			key: 'nextjs',
			whitelist: ['auth', "authForm"],
			storage,
		};

		const persistedReducer = persistReducer(persistConfig, rootReducer);

		const store = makeConfiguredStore(persistedReducer);

		store.__persistor = persistStore(store);

		return store;
	}
};

export const wrapper = createWrapper(makeStore)