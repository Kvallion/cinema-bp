import { useRouter } from "next/router"
import { memo, useCallback } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { AdminTableActions } from "@features/AdminTableActions"
import { useCreateActorMutation } from "@entities/actor"
import { useDeleteMovieMutation, useGetAllMoviesQuery } from "@entities/movie"
import { SearchField } from "@entities/search"
import { AdminTable } from "@entities/table"
import { getEditActorRoute, getEditMovieRoute } from "@shared/routes/routes"

type MoviesAdminTableProps = {}

const MoviesAdminTable: React.FC<MoviesAdminTableProps> = () => {
	const { push } = useRouter()
	const { debouncedValue, input } = useDeboucedInput()
	const { data: movies } = useGetAllMoviesQuery(debouncedValue)

	const [deleteMovie] = useDeleteMovieMutation()
	const [createActor] = useCreateActorMutation()

	const handleCreateActor = useCallback(async () => {
		const id = await createActor().unwrap()
		push(getEditActorRoute(id))
	}, [])

	return (
		<div>
			<AdminTableActions {...input} create={handleCreateActor} />

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
