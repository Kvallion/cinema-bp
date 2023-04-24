import { NextPage } from "next"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import { AppStore, wrapper } from "@app/store"
import { getAllMovies } from "@entities/movie"

const HomePage: NextPage = () => {
	return (
		<div>
			{Array.from({ length: 1 }).map((_, i) => (
				<div key={i} style={{ maxWidth: "100px" }} className="ml-52">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
					mollitia, quam et blanditiis placeat quia sint nam corporis
					repellendus autem, rem ratione quae culpa impedit aut.
					Ducimus repudiandae commodi quis quasi, optio ea mollitia
					asperiores dolorum, necessitatibus nulla perferendis sed
					nostrum ipsam a ipsa. Repellat voluptatem reprehenderit
					culpa delectus sed?
				</div>
			))}
		</div>
	)
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await layoutApiCall(store.dispatch)
		await store.dispatch(getAllMovies.initiate(_))

		return {
			props: {},
		}
	}
)

export default HomePage
