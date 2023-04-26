import { useRouter } from "next/router"
import { memo } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { useDeleteActorMutation, useGetAllActorsQuery } from "@entities/actor"
import { SearchField } from "@entities/search"
import { AdminTable } from "@entities/table"
import { getEditActorRoute } from "@shared/routes/routes"

type ActorsAdminTableProps = {}

const ActorsAdminTable: React.FC<ActorsAdminTableProps> = () => {
	const { push } = useRouter()
	const { debouncedValue, input } = useDeboucedInput()
	const { data: actors } = useGetAllActorsQuery({
		searchTerm: debouncedValue,
	})

	const [deleteActor] = useDeleteActorMutation()
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
				data={actors ? actors.map(a => [a.name, a.slug]) : []}
				actions={
					actors
						? actors.map(a => ({
								onEdit: () => push(getEditActorRoute(a._id)),
								onDelete: () => deleteActor(a._id),
						  }))
						: []
				}
			/>
		</div>
	)
}

export default memo(ActorsAdminTable)
