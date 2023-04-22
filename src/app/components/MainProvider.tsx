import NextProgressBar from "./NextProgressBar"
import ReduxToast from "./ReduxToast"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { WithChildren } from "shared/types/utility/WithChildren"
import { AppStore } from "@app/store"

type MainProviderProps = WithChildren & {
	store: AppStore
}

const MainProvider: React.FC<MainProviderProps> = ({ children, store }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={(store as any).__persistor} loading={null}>
				<NextProgressBar />
				<ReduxToast />
				{children}
			</PersistGate>
		</Provider>
	)
}

export { MainProvider }
