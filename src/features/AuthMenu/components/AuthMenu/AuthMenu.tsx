import { Menu, MenuItem } from "@entities/menu"
import { useAuthActions, useCurrentUser } from "@features/authorization"
import { ADMIN, ROOT } from "@shared/routes/routes"

type AuthMenuProps = {}

const AuthMenu: React.FC<AuthMenuProps> = () => {
	const user = useCurrentUser()
	const { logout } = useAuthActions()
	return (
		<Menu menuTitle="General">
			{user ? (
				<>
					<MenuItem
						icon="MdAccountCircle"
						link="/profile"
						title="Profile"
					/>
					{user.isAdmin && (
						<MenuItem
							icon="MdOutlineLock"
							link={ADMIN}
							title="Admin panel"
						/>
					)}
					<MenuItem
						onClick={logout}
						title="Logout"
						link={ROOT}
						icon="MdLogout"
						disableActive
					/>
				</>
			) : (
				<>
					<MenuItem icon="MdLogin" link="/auth" title="Authorize" />
				</>
			)}
		</Menu>
	)
}

export default AuthMenu
