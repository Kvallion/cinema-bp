import Detail from "../Detail"
import dynamic from "next/dynamic"
import { memo } from "react"
import tw from "twin.macro"
import { useWindowDimensions } from "@hooks/useWindowDimensions"
import Banner from "@ui/Banner"
import { useCurrentUser } from "@features/authorization"
import { MaterialIcon } from "@entities/icon"
import { Movie } from "@entities/movie"
import { getActorRoute, getGenreRoute } from "@shared/routes/routes"

const LazyFavoriteButton = dynamic(
	() =>
		import("@features/favorites/components/FavoriteButton/FavoriteButton"),
	{ ssr: false }
)

type MovieBannerProps = {
	movie: Movie
}

const MovieBanner: React.FC<MovieBannerProps> = ({ movie }) => {
	const {
		_id,
		title,
		genres,
		actors,
		bigPoster,
		parameters: { duration, year, country },
		description,
		rating,
	} = movie
	const user = useCurrentUser()
	const { width } = useWindowDimensions()
	return (
		<StyledBanner image={bigPoster} alt={title}>
			{width <= 640 && user && (
				<LazyFavoriteButton className="ml-4" movieId={_id} />
			)}
			<BannerContent>
				<MovieTitle>{title}</MovieTitle>
				<HorizontalDetails>
					<li>{year}</li>
					<li>{`${Math.floor(duration / 60)} h. ${
						duration % 60
					} m.`}</li>
					<li>{country}</li>
				</HorizontalDetails>

				<ul>
					<Detail
						name="Genres"
						links={genres.map(g => ({
							title: g.name,
							link: getGenreRoute(`/${g.slug}`),
						}))}
					/>
				</ul>

				<Rating>
					<Star />
					<span className="ml-2 text-white">{rating}</span>
				</Rating>

				{width > 640 && user && (
					<LazyFavoriteButton
						tw="absolute right-8 bottom-20"
						movieId={_id}
					/>
				)}
			</BannerContent>
		</StyledBanner>
	)
}

const StyledBanner = tw(Banner)`rounded-none xs:rounded-layout`

const BannerContent = tw.div`relative z-2 p-4 sm:p-8`

const MovieTitle = tw.h1`mb-1 text-3xl sm:text-5xl font-semibold uppercase text-white text-shadow`

const HorizontalDetails = tw.ul`my-3 flex gap-x-4 text-white text-opacity-80`

const Rating = tw.div`md:absolute bottom-8 right-8 flex  items-center text-xl opacity-90`

const Star = tw(MaterialIcon)`mb-0.5 fill-yellow-700`
Star.defaultProps = { name: "MdStarRate" }

export default memo(MovieBanner)
