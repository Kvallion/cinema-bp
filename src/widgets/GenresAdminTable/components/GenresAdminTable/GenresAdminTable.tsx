import { useRouter } from "next/router"
import { memo } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { useDeleteGenreMutation, useGetAllGenresQuery } from "@entities/genre"
import { SearchField } from "@entities/search"
import { AdminTable } from "@entities/table"
import { getEditGenreRoute } from "@shared/routes/routes"

type GenresAdminTableProps = {}

const GenresAdminTable: React.FC<GenresAdminTableProps> = () => {
	const { push } = useRouter()
	const { debouncedValue, input } = useDeboucedInput()
	const { data: genres } = useGetAllGenresQuery(debouncedValue)

	const [deleteGenre] = useDeleteGenreMutation()
	return (
		<div>
			<SearchField
				placeholder="Search"
				className="w-2/3 md:w-2/5"
				{...input}
			/>
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
