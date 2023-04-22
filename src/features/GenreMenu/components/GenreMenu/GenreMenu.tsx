import { getGenreRoute } from "@shared/routes/routes"
import { SkeletonLoader } from "@ui/SkeletonLoader"
import { useGetPopularGenresQuery } from "@entities/genre"
import { MaterialIconName } from "@entities/icon"
import { Menu, MenuItem } from "@entities/menu"
import { MenuItemSkeleton } from "@entities/menu"

type GenreMenuProps = {}

const itemCount = 4

const GenreMenu: React.FC<GenreMenuProps> = () => {
	const { data: genres, isFetching } = useGetPopularGenresQuery()
	return (
		<Menu menuTitle="popular genres">
			{!isFetching ? (
				genres &&
				genres
					.slice(0, itemCount)
					.map(({ _id, name, icon, slug }) => (
						<MenuItem
							key={_id}
							icon={icon as MaterialIconName}
							title={name}
							link={getGenreRoute(slug)}
						/>
					))
			) : (
				<>
					{Array.from({ length: itemCount }).map((_, i) => (
						<MenuItemSkeleton key={i} />
					))}
				</>
			)}
		</Menu>
	)
}

export { GenreMenu }
