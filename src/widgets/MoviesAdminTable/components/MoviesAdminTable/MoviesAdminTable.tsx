import { useRouter } from "next/router"
import { memo } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { useDeleteMovieMutation, useGetAllMoviesQuery } from "@entities/movie"
import { SearchField } from "@entities/search"
import { AdminTable } from "@entities/table"
import { getEditMovieRoute } from "@shared/routes/routes"

type MoviesAdminTableProps = {}

const MoviesAdminTable: React.FC<MoviesAdminTableProps> = () => {
	const { push } = useRouter()
	const { debouncedValue, input } = useDeboucedInput()
	const { data: movies } = useGetAllMoviesQuery(debouncedValue)

	const [deleteMovie] = useDeleteMovieMutation()
	return (
		<div>
			<SearchField
				placeholder="Search"
				className="w-2/3 md:w-2/5"
				{...input}
			/>
			<AdminTable
				cellCount={3}
				columnTitles={["Title", "Genres", "Rating"]}
				columnsWidth={["w-1/3", "w-1/3", "w-1/6 text-center"]}
				data={
					movies
						? movies.map(m => [
								m.title,
								m.genres.map(g => g.name).join(", "),
								m.rating,
						  ])
						: []
				}
				actions={
					movies
						? movies.map(m => ({
								onEdit: () => push(getEditMovieRoute(m._id)),
								onDelete: () => deleteMovie(m._id),
						  }))
						: []
				}
			/>
		</div>
	)
}

export default memo(MoviesAdminTable)
