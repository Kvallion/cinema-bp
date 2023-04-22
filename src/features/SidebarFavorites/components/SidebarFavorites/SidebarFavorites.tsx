import { FAVORITES } from "@shared/routes/routes"
import Link from "next/link"
import { useGetFavoritesQuery } from "@entities/user"
import { _ } from "@shared/consts/utility"
import { Button } from "@ui/Button"
import { useCurrentUser } from "@features/authorization"
import { SidebarMovieList } from "@entities/movie"

type SidebarFavoritesProps = {}

const SidebarFavorites: React.FC<SidebarFavoritesProps> = () => {
	const user = useCurrentUser()
	const { data: movies, isFetching } = useGetFavoritesQuery(_, {
		skip: !user,
	})
	return (
		<div>
			<SidebarMovieList
				title="Favorite movies"
				movies={movies || []}
				className="mb-4"
			/>
			<Link href={FAVORITES}>
				<Button text="See more" wFull />
			</Link>
		</div>
	)
}

export { SidebarFavorites }
