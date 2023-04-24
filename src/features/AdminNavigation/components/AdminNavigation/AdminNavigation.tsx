import { memo } from "react"
import { adminNavItems } from "@features/AdminNavigation/model/data/admin-navigation.data"
import { HorizontalNavPanel } from "@entities/navigation"

type AdminNavigationProps = {
	className?: string
}

const AdminNavigation: React.FC<AdminNavigationProps> = ({ className }) => {
	return (
		<HorizontalNavPanel
			variant="top"
			items={adminNavItems}
			className={className}
		/>
	)
}

export default memo(AdminNavigation)
