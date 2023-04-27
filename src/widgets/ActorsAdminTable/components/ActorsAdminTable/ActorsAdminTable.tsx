import { useRouter } from "next/router"
import { memo, useCallback } from "react"
import useDeboucedInput from "@hooks/useDeboucedInput"
import { AdminTableActions } from "@features/AdminTableActions"
import {
	useCreateActorMutation,
	useDeleteActorMutation,
	useGetAllActorsQuery,
} from "@entities/actor"
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
	const [createActor] = useCreateActorMutation()

	const handleCreateActor = useCallback(async () => {
		const id = await createActor().unwrap()
		push(getEditActorRoute(id))
	}, [])

	return (
		<div>
			<AdminTableActions {...input} create={handleCreateActor} />

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
