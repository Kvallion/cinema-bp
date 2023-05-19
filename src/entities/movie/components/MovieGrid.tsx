import { memo } from "react"
import tw from "twin.macro"
import { Movie } from "../model/movie.types"
import ImageCard from "@ui/ImageCard"
import { getMovieRoute } from "@shared/routes/routes"

type MovieGridProps = {
	movies: Movie[]
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
	return (
		<Grid>
			{movies.map(m => (
				<ImageCard
					key={m._id}
					variant="horizontal"
					image={m.bigPoster}
					alt={m.title + " movie poster"}
					link={getMovieRoute(m.slug)}
					title={m.title}
					subtitle={m.description}
					jumpOnHover
				/>
			))}
		</Grid>
	)
}

const Grid = tw.div`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6`

export default memo(MovieGrid)
