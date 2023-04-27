import { useRouter } from "next/router"
import { memo, useCallback } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { AdminTableActions } from "@features/AdminTableActions"
import {
	useCreateGenreMutation,
	useDeleteGenreMutation,
	useGetAllGenresQuery,
} from "@entities/genre"
import { AdminTable } from "@entities/table"
import { getEditGenreRoute } from "@shared/routes/routes"

type GenresAdminTableProps = {}

const GenresAdminTable: React.FC<GenresAdminTableProps> = () => {
	const { push } = useRouter()
	const { debouncedValue, input } = useDeboucedInput()
	const { data: genres } = useGetAllGenresQuery(debouncedValue)

	const [deleteGenre] = useDeleteGenreMutation()
	const [createGenre] = useCreateGenreMutation()

	const handleCreateGenre = useCallback(async () => {
		const id = await createGenre().unwrap()
		push(getEditGenreRoute(id))
	}, [])

	return (
		<div>
			<AdminTableActions {...input} create={handleCreateGenre} />

			<AdminTable
				cellCount={2}
				columnTitles={["Name", "Slug"]}
				columnsWidth={["w-1/3", "w-1/3"]}
				data={genres ? genres.map(g => [g.name, g.slug]) : []}
				actions={
					genres
						? genres.map(g => ({
								onEdit: () => push(getEditGenreRoute(g._id)),
								onDelete: () => deleteGenre(g._id),
						  }))
						: []
				}
			/>
		</div>
	)
}

export default memo(GenresAdminTable)
