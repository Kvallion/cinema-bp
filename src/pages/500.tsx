import { NextPage } from "next"
import layoutApiCall from "@app/api/layout-api-call"
import { PageMeta } from "@shared/components/PageMeta"
import { PageHeading } from "@ui/PageHeading"
import { AppStore, wrapper } from "@app/store"

const Error500: NextPage = () => {
	return (
		<div className="px-0 py-5 md:p-layout">
			<PageMeta title="500 - Internal server error" />
			<PageHeading>500 - Internal server error occurred</PageHeading>
		</div>
	)
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await layoutApiCall(store.dispatch)
		return {
			props: {},
		}
	}
)

export default Error500
