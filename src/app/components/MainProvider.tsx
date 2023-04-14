import { AppStore } from "@app/store/store"
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
			<NextProgressBar />
			<ReduxToast />
			{children}
		</Provider>
	)
}

export { MainProvider }
