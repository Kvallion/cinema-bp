import { FAVORITES } from "@shared/routes/routes"
import Link from "next/link"
import s from "./SidebarFavorites.module.scss"
import { Button } from "@ui/Button"
import { SidebarMovieList } from "@entities/movie"

type SidebarFavoritesProps = {}

const SidebarFavorites: React.FC<SidebarFavoritesProps> = () => {
	// const { data: movies, isFetching } = useGetPopularMoviesQuery()
	return (
		<div>
			{/* <SidebarMovieList title="Favorite movies" movies={movies || []} /> */}
			<Link href={FAVORITES}>
				<Button text="See more" wFull />
			</Link>
		</div>
	)
}

export { SidebarFavorites }
