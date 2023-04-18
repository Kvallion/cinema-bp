import layoutApiCall from "@app/api/layout-api-call"
import { wrapper, AppStore } from "@app/store"
import { getAllMovies } from "@entities/movie"
import { NextPage } from "next"

const HomePage: NextPage = () => {
	return <div></div>
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async (ctx) => {
		await layoutApiCall(store.dispatch)
		await store.dispatch(getAllMovies.initiate())

		return {
			props: {},
		}
	}
)

export default HomePage
