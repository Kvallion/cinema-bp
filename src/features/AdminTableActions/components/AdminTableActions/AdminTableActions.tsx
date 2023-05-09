import { ChangeEvent, memo } from "react"
import tw from "twin.macro"
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
		<div className="flex gap-4 flex-col items-start xs:flex-row justify-between xs:items-center">
			<SearchField
				className="flex-grow ssm:flex-grow-0 ssm:w-2/3 md:w-2/5"
				value={value}
				onChange={onChange}
			/>
			{create && <CreateButton text="Create new" onClick={create} />}
		</div>
	)
}

const CreateButton = tw(Button)`px-4 whitespace-nowrap`

export default memo(AdminTableActions)
