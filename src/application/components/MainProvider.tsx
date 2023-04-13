import { store } from "application/store/store"
import { Provider } from "react-redux"
import { WithChildren } from "shared/types/utility/WithChildren"
import NextProgressBar from "./NextProgressBar"
import ReduxToast from "./ReduxToast"

// type MainProviderProps = HasRoleConfig & HasChildren & {}

const MainProvider: React.FC<WithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<NextProgressBar />
			<ReduxToast />
			{children}
		</Provider>
	)
}

export { MainProvider }
