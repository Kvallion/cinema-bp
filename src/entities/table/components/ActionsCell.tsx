import { Cell } from "./AdminTable"
import { IconButton } from "@ui/IconButton"
import { MaterialIcon } from "@entities/icon"

export type ActionsCellProps = {
	onEdit: () => void
	onDelete: () => void
}

const ActionsCell: React.FC<ActionsCellProps> = ({ onEdit, onDelete }) => {
	return (
		<Cell>
			<IconButton onClick={onEdit}>
				<MaterialIcon name="MdEdit" />
			</IconButton>
			<IconButton onClick={onDelete}>
				<MaterialIcon name="MdDelete" className="text-primary" />
			</IconButton>
		</Cell>
	)
}

export default ActionsCell
