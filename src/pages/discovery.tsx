import { NextPage } from "next"
import { useMemo } from "react"
import tw from "twin.macro"
import layoutApiCall from "@app/api/layout-api-call"
import useDeboucedInput from "@hooks/useDeboucedInput"
import includes from "@shared/lib/helper/strings/includes"
import { PageHeading } from "@ui/PageHeading"
import { PageP } from "@ui/PageP"
import { AppStore, wrapper } from "@app/store"
import {
	getGenreMoviesCollections,
	useGetGenreMoviesCollectionsQuery,
} from "@entities/genre"
import { MovieStackCard } from "@entities/movie"
import { SearchField } from "@entities/search"
import { getGenreRoute } from "@shared/routes/routes"

const DiscoveryPage: NextPage = () => {
	const { debouncedValue, input } = useDeboucedInput()

	const { data: collections } = useGetGenreMoviesCollectionsQuery()
	const filteredCollecitons = useMemo(() => {
		return collections?.filter(c => includes(c.title, debouncedValue)) || []
	}, [collections, debouncedValue])

	return (
		<div className="px-layout py-5 md:py-layout">
			<PageHeading>Discovery</PageHeading>
			<PageP>The list of all genres available on the site</PageP>
			<SearchField className="mt-5 w-2/3 md:w-2/5" {...input} />
			<Grid className="mt-10">
				{filteredCollecitons &&
					filteredCollecitons.map(({ _id, images, title, slug }) => (
						<MovieStackCard
							key={_id}
							title={title}
							link={getGenreRoute(slug)}
							posters={images}
						/>
					))}
			</Grid>
		</div>
	)
}

const Grid = tw.div`grid grid-cols-1 ssm:grid-cols-2 sm:grid-cols-3 gap-8`

export const getStaticProps = wrapper.getStaticProps(
	(store: AppStore) => async ctx => {
		await Promise.all([
			layoutApiCall(store.dispatch),
			store.dispatch(getGenreMoviesCollections.initiate()),
		])

		return { props: {} }
	}
)

export default DiscoveryPage
