import "@app/styles/globals.scss"
import { DefaultLayout, MainProvider } from "@app/components"
import { wrapper } from "@app/store"
import { AppProps } from "next/app"
import { FC } from "react"

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	return (
		<MainProvider store={store}>
			<DefaultLayout>
				<Component {...props.pageProps} />
			</DefaultLayout>
		</MainProvider>
	)
}

export default MyApp
