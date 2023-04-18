import { SidebarMovieList } from "@entities/movie"
import { FAVORITES } from "@shared/routes/routes"
import { PrimaryButton } from "@ui/PrimaryButton"
import Link from "next/link"
import s from "./SidebarFavorites.module.scss"

type SidebarFavoritesProps = {}

const SidebarFavorites: React.FC<SidebarFavoritesProps> = () => {
	// const { data: movies, isFetching } = useGetPopularMoviesQuery()
	return (
		<div>
			{/* <SidebarMovieList title="Favorite movies" movies={movies || []} /> */}
			<Link href={FAVORITES}>
				<PrimaryButton text="See more" wFull />
			</Link>
		</div>
	)
}

export { SidebarFavorites }
