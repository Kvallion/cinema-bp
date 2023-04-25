import { memo } from "react"
import { _ } from "@shared/consts/utility"
import { SectionHeading } from "@ui/SectionHeading"
import { useGetAllMoviesQuery } from "@entities/movie"
import { MultipleCarousel } from "@entities/сarousel"
import { getMovieRoute } from "@shared/routes/routes"

type TrendingMoviesCarouselProps = { className?: string }

const TrendingMoviesCarousel: React.FC<TrendingMoviesCarouselProps> = ({
	className,
}) => {
	const { data: movies } = useGetAllMoviesQuery(_)
	return (
		<section className={className}>
			<SectionHeading className="mb-5">Trending now</SectionHeading>
			<MultipleCarousel
				data={movies || []}
				getId={d => d._id}
				getImage={d => d.poster}
				getLink={d => getMovieRoute(d.slug)}
				imagePriority
			/>
		</section>
	)
}

export default memo(TrendingMoviesCarousel)
