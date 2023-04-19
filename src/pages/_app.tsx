import "@app/styles/globals.scss"
import { DefaultLayout, MainProvider } from "@app/components"
import { wrapper } from "@app/store"
import { AppProps } from "next/app"
import { FC } from "react"
import dynamic from "next/dynamic"
import { RoleAccessConfig } from "@features/authorization"

const DynamicAccessCheckByRole = dynamic(
	() =>
		import(
			"@features/authorization/components/AccessCheckByRole/AccessCheckByRole"
		),
	{ ssr: false }
)

const MyApp: FC<
	AppProps & {
		Component: RoleAccessConfig
	}
> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	const { onlyAdmin, onlyUser } = Component
	return (
		<MainProvider store={store}>
			<DynamicAccessCheckByRole
				onlyAdmin={onlyAdmin}
				onlyUser={onlyUser}
			/>
			<DefaultLayout>
				<Component {...props.pageProps} />
			</DefaultLayout>
		</MainProvider>
	)
}

export default MyApp
