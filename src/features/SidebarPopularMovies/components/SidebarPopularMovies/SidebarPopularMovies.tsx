import { TRENDING } from "@shared/routes/routes"
import Link from "next/link"
import s from "./SidebarPopularMovies.module.scss"
import { Button } from "@ui/Button"
import { SidebarMovieList, useGetPopularMoviesQuery } from "@entities/movie"

type SidebarPopularMoviesProps = {}

const SidebarPopularMovies: React.FC<SidebarPopularMoviesProps> = () => {
	const { data: movies, isFetching } = useGetPopularMoviesQuery()
	return (
		<div className={s.popular_movies}>
			<SidebarMovieList
				title="Popular movies"
				movies={movies || []}
				className="mb-4"
			/>
			<Link href={TRENDING}>
				<Button text="See more" wFull />
			</Link>
		</div>
	)
}

export { SidebarPopularMovies }
