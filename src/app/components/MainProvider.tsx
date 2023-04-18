import { appTheme } from "@app/model/theme"
import { AppStore } from "@app/store"
import { ThemeProvider } from "@mui/material/styles"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { WithChildren } from "shared/types/utility/WithChildren"
import NextProgressBar from "./NextProgressBar"
import ReduxToast from "./ReduxToast"

type MainProviderProps = WithChildren & {
	store: AppStore
}

const MainProvider: React.FC<MainProviderProps> = ({ children, store }) => {
	return (
		<Provider store={store}>
			<PersistGate
				persistor={(store as any).__persistor}
				loading={<div>Loading</div>}
			>
				<ThemeProvider theme={appTheme}>
					<NextProgressBar />
					<ReduxToast />
					{children}
				</ThemeProvider>
			</PersistGate>
		</Provider>
	)
}

export { MainProvider }
