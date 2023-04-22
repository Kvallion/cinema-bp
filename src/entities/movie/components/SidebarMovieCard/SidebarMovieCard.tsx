import { getMovieRoute } from "@shared/routes/routes"
import Image from "next/image"
import Link from "next/link"
import tw, { css, styled } from "twin.macro"
import { Movie } from "@entities/movie/model/movie.types"
import { SkeletonLoader } from "@ui/SkeletonLoader"
import { MaterialIcon } from "@entities/icon"

type SidebarMovieCardProps = Pick<
	Movie,
	"title" | "poster" | "slug" | "genres" | "rating"
> & { isLoading?: boolean }

const SidebarMovieCard: React.FC<SidebarMovieCardProps> = ({
	title,
	slug,
	genres,
	rating,
	poster,
	isLoading,
}) => {
	return !isLoading ? (
		<Card>
			<Link href={getMovieRoute(slug)}>
				<Poster
					src={poster}
					alt={title + "poster"}
					priority
					width={65}
					height={97}
					draggable={false}
				/>
			</Link>
			<Info>
				<Title>{title}</Title>
				<Genres>
					{genres
						.slice(0, 4)
						.map(g => g.name)
						.join(", ")}
					{genres.length > 4 && "..."}
				</Genres>
				<Rating>
					<Star />
					<RatingValue>{rating}</RatingValue>
				</Rating>
			</Info>
		</Card>
	) : (
		<Card>
			<ImageSkeleton />
			<Info>
				<TitleSkeleton />
				<GenresSkeleton />
				<RatingSkeleton />
			</Info>
		</Card>
	)
}

const Poster = styled(Image)(
	() => tw`
	rounded-image border border-transparent transition-colors image-like-bg`
)

const Info = tw.div`w-2/3 ml-4 flex flex-col`

const Title = tw.h5`truncate text-lg font-medium text-white`

const Genres = tw.span`text-sm text-gray-600`

const Rating = tw.div`mb-2 flex items-center justify-self-end`

const RatingValue = tw.span``

const Star = tw(MaterialIcon)`mr-2 fill-yellow-700 text-lg`
Star.defaultProps = { name: "MdStar" }

const Card = styled.div(() => [
	tw`flex items-stretch`,
	css`
		&:hover ${Poster} {
			${tw`border-primary`}
		}
	`,
])

const ImageSkeleton = styled(SkeletonLoader)(() => tw`h-24 w-16 rounded-image`)

const TitleSkeleton = styled(SkeletonLoader)(() => tw`h-6 rounded-full mb-1`)

const GenresSkeleton = styled(SkeletonLoader)(() => tw`h-5 rounded-full mb-1`)

const RatingSkeleton = styled(SkeletonLoader)(
	() => tw`h-6 w-12 justify-self-start rounded-full`
)

export { SidebarMovieCard }
