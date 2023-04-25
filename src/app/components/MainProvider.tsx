import NextProgressBar from "./NextProgressBar"
import ReduxToast from "./ReduxToast"
import { Provider } from "react-redux"
import { WithChildren } from "shared/types/utility/WithChildren"
import { AppStore } from "@app/store"

type MainProviderProps = WithChildren & {
	store: AppStore
}

const MainProvider: React.FC<MainProviderProps> = ({ children, store }) => {
	return (
		<Provider store={store}>
			<NextProgressBar />
			<ReduxToast />
			{children}
		</Provider>
	)
}

export { MainProvider }
