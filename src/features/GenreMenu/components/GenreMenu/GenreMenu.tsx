import { useGetPopularGenresQuery } from "@entities/genre"
import { MaterialIconName } from "@entities/icon"
import { Menu, MenuItem } from "@entities/menu"
import Skeleton from "@mui/material/Skeleton"
import { getGenreRoute } from "@shared/routes/routes"
import s from "@entities/menu/components/MenuItem/MenuItem.module.scss"

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
						<div key={i} className={s.skeleton_wrapper}>
							<Skeleton
								variant="rounded"
								className={s.skeleton}
								height={36}
								width={200}
							/>
						</div>
					))}
				</>
			)}
		</Menu>
	)
}

export { GenreMenu }
