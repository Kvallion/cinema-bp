import { NextPage } from "next"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import { AppStore, wrapper } from "@app/store"
import { getAllMovies } from "@entities/movie"

const HomePage: NextPage = () => {
	return <div></div>
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async (ctx) => {
		await layoutApiCall(store.dispatch)
		await store.dispatch(getAllMovies.initiate(_))

		return {
			props: {},
		}
	}
)

export default HomePage
