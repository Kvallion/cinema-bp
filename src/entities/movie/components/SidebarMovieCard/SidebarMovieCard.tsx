import { getMovieRoute } from "@shared/routes/routes"
import Image from "next/image"
import Link from "next/link"
import tw, { css, styled } from "twin.macro"
import { Movie } from "@entities/movie/model/movie.types"
import { MaterialIcon } from "@entities/icon"

type SidebarMovieCardProps = Pick<
	Movie,
	"title" | "poster" | "slug" | "genres" | "rating"
> & {}

const SidebarMovieCard: React.FC<SidebarMovieCardProps> = ({
	title,
	slug,
	genres,
	rating,
	poster,
}) => {
	return (
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
	)
}

const Poster = styled(Image)`
	rounded-image border border-transparent transition-colors image-like-bg
`

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

export { SidebarMovieCard }
