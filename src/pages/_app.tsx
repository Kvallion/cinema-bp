import { MainProvider } from "@app/components"
import { wrapper } from "@app/store"
import { AppProps } from "next/app"
import { FC } from "react"

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	return (
		<MainProvider store={store}>
			<Component {...props.pageProps} />
		</MainProvider>
	)
}

export default MyApp;