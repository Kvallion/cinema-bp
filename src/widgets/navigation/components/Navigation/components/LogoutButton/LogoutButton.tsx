import { Button } from "@components/ui/formElements/Button"
import { useActions } from "@hooks/useActions"
import { MenuItemButton } from "../../../../../../features/navigation-menus/components/MenuItemButton"

type LogoutButtonProps = {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
	const { logout } = useActions()

	return (
		<MenuItemButton
			onClick={() => logout()}
			title="Logout"
			link="/"
			icon="MdLogout"
			disableActive
		/>
	)
}

export { LogoutButton }
