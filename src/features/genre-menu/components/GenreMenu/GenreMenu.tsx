import { useGetPopularGenresQuery } from "@entities/genre"
import { MaterialIconName } from "@entities/icon"
import { Menu, MenuItem } from "@entities/menu"
import Skeleton from "@mui/material/Skeleton"
import { getGenreRoute } from "@shared/routes/routes"

type GenreMenuProps = {}

const GenreMenu: React.FC<GenreMenuProps> = () => {
	const { data: genres, isFetching } = useGetPopularGenresQuery()
	return (
		<Menu menuTitle="popular genres">
			{!isFetching ? (
				genres &&
				genres
					.slice(0, 4)
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
					<Skeleton variant="rounded" width={210} height={60} />
					<Skeleton variant="rounded" width={210} height={60} />
					<Skeleton variant="rounded" width={210} height={60} />
					<Skeleton variant="rounded" width={210} height={60} />
				</>
			)}
		</Menu>
	)
}

export { GenreMenu }
