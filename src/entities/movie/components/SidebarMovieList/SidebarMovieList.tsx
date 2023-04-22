import { SidebarMovieCard } from "../SidebarMovieCard"
import { Movie } from "@entities/movie/model/movie.types"
import { Stack } from "@shared/components/Stack"
import { Heading4 } from "@ui/Heading4"

type SidebarMovieListProps = {
	title: string
	movies: Movie[]
	className?: string
	isLoading?: boolean
}

const SidebarMovieList: React.FC<SidebarMovieListProps> = ({
	movies,
	title,
	className,
	isLoading,
}) => {
	return (
		<>
			<Heading4 text={title} classes={["mb-5"]} />
			<Stack spacing={4} className={className}>
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
							isLoading={isLoading}
						/>
					))}
			</Stack>
		</>
	)
}

export { SidebarMovieList }
