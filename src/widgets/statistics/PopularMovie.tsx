import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import tw, { css, styled } from "twin.macro"
import { SkeletonLoader } from "@ui/SkeletonLoader"
import { getMovieRoute } from "@shared/routes/routes"

type PopularMovieProps = {
	openingCount: number
	slug: string
	poster: string
	movieTitle: string
}

const PopularMovie: React.FC<PopularMovieProps> = ({
	movieTitle,
	openingCount,
	slug,
	poster,
}) => {
	return (
		<>
			<Title>The most popular movie</Title>
			<Subtitle>Opened {openingCount} times</Subtitle>
			<PosterRatio>
				<PosterLink href={getMovieRoute(slug)}>
					<Poster src={poster} alt={movieTitle + "movie"} />
				</PosterLink>
			</PosterRatio>
		</>
	)
}

export const PopularMovieSkeleton: React.FC = ({}) => {
	return (
		<>
			<Title>The most popular movie</Title>
			<Subtitle>
				<span>Opened</span>
				<OpeningCountSkeleton />
				<span>times</span>
			</Subtitle>
			<PosterRatio>
				<PosterSkeleton />
			</PosterRatio>
		</>
	)
}

const Title = tw.h2`text-white font-semibold text-base sm:text-2xl text-center`

const Subtitle = tw.p`relative flex mb-3 font-medium opacity-50 text-sm sm:text-base`
const OpeningCountSkeleton = tw(
	SkeletonLoader
)`inline-block mx-2 w-4 h-4 rounded-sm translate-y-0.5`

const PosterLink = tw(Link)`block full-screen`
const PosterRatio = styled.div(() => [
	tw`relative w-full rounded-layout overflow-hidden`,
	css`
		& {
			padding-bottom: 60%;
		}
	`,
])
const Poster = tw(Image)`image-like-bg`
Poster.defaultProps = { fill: true, draggable: false }

const PosterSkeleton = tw(SkeletonLoader)`block full-screen rounded-layout`

export default memo(PopularMovie)
