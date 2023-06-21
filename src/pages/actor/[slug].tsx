import parse from "html-react-parser"
import { GetStaticPaths, NextPage } from "next"
import { useRouter } from "next/router"
import tw from "twin.macro"
import layoutApiCall from "@app/api/layout-api-call"
import { _ } from "@shared/consts/utility"
import { PageMeta } from "@shared/components/PageMeta"
import TextLimiter from "@ui/TextLimiter"
import { AppStore, makeStore, wrapper } from "@app/store"
import { ActorInfo } from "@features/ActorInfo"
import {
	getActorBySlug,
	getAllActors,
	useGetActorBySlugQuery,
} from "@entities/actor"
import { getMoviesByActor, useGetMoviesByActorQuery } from "@entities/movie"
import { MultipleCarousel } from "@entities/сarousel"
import { getMovieRoute } from "@shared/routes/routes"

const ActorPage: NextPage = () => {
	const { query } = useRouter()
	const slug = query.slug as string
	const { data: actor } = useGetActorBySlugQuery(slug)
	const { data: movies } = useGetMoviesByActorQuery(actor!._id, {
		skip: !actor?._id,
	})

	return (
		<div className="px-4 py-5 md:p-layout">
			<PageMeta
				title={actor?.name || "Loading..."}
				description={actor?.name + "page"}
			/>
			<ActorInfo actor={actor!} />

			<Heading className="mt-8 mb-4">Filmography</Heading>
			<MultipleCarousel
				data={movies || []}
				getId={m => m._id}
				getImage={m => m.poster}
				getLink={m => getMovieRoute(m.slug)}
				imagePriority
			/>
			<Heading className="mt-8 mb-4">Mini Biography</Heading>
			<TextLimiter>
				<Bio>{parse(actor?.miniBio || "")}</Bio>
			</TextLimiter>
		</div>
	)
}

const Heading = tw.h2`text-white text-2xl font-bold`
const Bio = tw.article`text-sm xs:text-lg font-light text-white text-opacity-60`

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
		const [_, { data: actor }] = await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getActorBySlug.initiate(slug)),
		])
		await store.dispatch(getMoviesByActor.initiate(actor?._id || ""))
		return {
			props: {},
		}
	}
)

export default ActorPage
