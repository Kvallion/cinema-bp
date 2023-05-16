import { useRouter } from "next/router"
import { memo, useCallback } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { AdminTableActions } from "@features/AdminTableActions"
import {
	useCreateMovieMutation,
	useDeleteMovieMutation,
	useGetAllMoviesQuery,
} from "@entities/movie"
import { AdminTable } from "@entities/table"
import { getEditMovieRoute } from "@shared/routes/routes"

type MoviesAdminTableProps = {}

const MoviesAdminTable: React.FC<MoviesAdminTableProps> = () => {
	const { push } = useRouter()
	const { debouncedValue, input } = useDeboucedInput()
	const { data: movies } = useGetAllMoviesQuery(debouncedValue)

	const [deleteMovie] = useDeleteMovieMutation()
	const [createMovie] = useCreateMovieMutation()

	const handleCreateMovie = useCallback(async () => {
		const id = await createMovie().unwrap()
		push(getEditMovieRoute(id))
	}, [])

	return (
		<div>
			<AdminTableActions {...input} create={handleCreateMovie} />

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
