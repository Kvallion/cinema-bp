import { appTheme } from "@app/model/theme"
import { AppStore } from "@app/store/store"
import { ThemeProvider } from "@mui/material/styles"
import { Provider } from "react-redux"
import { WithChildren } from "shared/types/utility/WithChildren"
import NextProgressBar from "./NextProgressBar"
import ReduxToast from "./ReduxToast"

type MainProviderProps = WithChildren & {
	store: AppStore
}

const MainProvider: React.FC<MainProviderProps> = ({ children, store }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={appTheme}>
				<NextProgressBar />
				<ReduxToast />
				{children}
			</ThemeProvider>
		</Provider>
	)
}

export { MainProvider }
