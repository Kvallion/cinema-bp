import { SidebarMovieList, useGetPopularMoviesQuery } from "@entities/movie"

import s from "./SidebarPopularMovies.module.scss"
import Link from "next/link"
import { PrimaryButton } from "@ui/PrimaryButton"
import { TRENDING } from "@shared/routes/routes"

type SidebarPopularMoviesProps = {}

const SidebarPopularMovies: React.FC<SidebarPopularMoviesProps> = () => {
	const { data: movies, isFetching } = useGetPopularMoviesQuery()
	return (
		<div className={s.popular_movies}>
			<SidebarMovieList title="Popular movies" movies={movies || []} />
			<Link href={TRENDING}>
				<PrimaryButton text="See more" wFull />
			</Link>
		</div>
	)
}

export { SidebarPopularMovies }
