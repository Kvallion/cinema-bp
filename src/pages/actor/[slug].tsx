import { GetStaticPaths, NextPage } from "next"
import { useRouter } from "next/router"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import { PageMeta } from "@shared/components/PageMeta"
import { AppStore, makeStore, wrapper } from "@app/store"
import {
	getActorBySlug,
	getAllActors,
	useGetActorBySlugQuery,
} from "@entities/actor"

const ActorPage: NextPage = () => {
	const { query } = useRouter()
	const slug = query.slug as string
	const { data: actor } = useGetActorBySlugQuery(slug)

	return (
		<div className="px-4 py-5 md:p-layout">
			<PageMeta
				title={actor?.name || "Loading..."}
				description={actor?.name + "page"}
			/>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async context => {
	try {
		const store = makeStore(context)
		const { data: actors } = await store.dispatch(getAllActors.initiate(_))

		const paths = actors?.map(({ slug }) => ({ params: { slug } })) || []

		return { paths, fallback: "blocking" }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		const slug = ctx.params?.slug as string
		await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getActorBySlug.initiate(slug)),
		])
		return {
			props: {},
		}
	}
)

export default ActorPage
