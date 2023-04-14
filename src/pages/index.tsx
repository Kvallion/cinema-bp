import { AppStore, wrapper } from "@app/store"
import { getAllMovies } from "@entities/movie"
import { NextPage } from "next"

const HomePage: NextPage = () => {
	return <div></div>
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async (ctx) => {
		await store.dispatch(getAllMovies.initiate())

		return {
			props: {},
		}
	}
)

export default HomePage
