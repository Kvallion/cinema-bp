import Link from "next/link"
import { _ } from "@shared/consts/utility"
import s from "./SidebarPopularMovies.module.scss"
import { Button } from "@ui/Button"
import { SidebarMovieList, useGetPopularMoviesQuery } from "@entities/movie"
import { TRENDING } from "@shared/routes/routes"

type SidebarPopularMoviesProps = {}

const SidebarPopularMovies: React.FC<SidebarPopularMoviesProps> = () => {
	const { data: movies } = useGetPopularMoviesQuery(_, {
		selectFromResult: state => ({
			...state,
			data: state.data?.slice(0, 3) || _,
		}),
	})
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
