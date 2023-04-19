import layoutApiCall from "@app/api/layout-api-call"
import { AppStore, wrapper } from "@app/store"
import { AuthForm } from "@features/authorization"
import { PageCenter } from "@ui/PageCenter"
import { NextPage } from "next"

const AuthPage: NextPage = () => {
	return (
		<PageCenter>
			<AuthForm />
		</PageCenter>
	)
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async (ctx) => {
		await layoutApiCall(store.dispatch)
		return { props: {} }
	}
)

export default AuthPage
