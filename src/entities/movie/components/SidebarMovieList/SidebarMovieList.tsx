import { Movie } from "@entities/movie/model/movie.types"

import Stack from "@mui/material/Stack"
import { Heading4 } from "@ui/Heading4"
import { SidebarMovieCard } from "../SidebarMovieCard"

type SidebarMovieListProps = {
	title: string
	movies: Movie[]
}

const SidebarMovieList: React.FC<SidebarMovieListProps> = ({
	movies,
	title,
}) => {
	return (
		<>
			<Heading4 text={title} classes={["mb-5"]} />
			<Stack component="ul">
				{movies
					.slice(0, 3)
					.map(({ _id, title, poster, slug, genres, rating }) => (
						<SidebarMovieCard
							key={_id}
							title={title}
							poster={poster}
							slug={slug}
							genres={genres}
							rating={rating}
						/>
					))}
			</Stack>
		</>
	)
}

export { SidebarMovieList }
