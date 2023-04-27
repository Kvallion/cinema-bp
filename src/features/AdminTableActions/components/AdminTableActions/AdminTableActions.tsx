import { ChangeEvent, memo } from "react"
import { Button } from "@ui/Button"
import { SearchField } from "@entities/search"

type AdminTableActionsProps = {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	create?: () => any
}

const AdminTableActions: React.FC<AdminTableActionsProps> = ({
	value,
	onChange,
	create,
}) => {
	return (
		<div className="flex justify-between">
			<SearchField
				className="w-2/3 md:w-2/5"
				value={value}
				onChange={onChange}
			/>
			{create && (
				<Button variant="primary" text="Create new" onClick={create} />
			)}
		</div>
	)
}

export default memo(AdminTableActions)
