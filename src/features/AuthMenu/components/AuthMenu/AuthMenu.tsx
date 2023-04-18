import { Menu, MenuItem } from "@entities/menu"
import { ADMIN, ROOT } from "@shared/routes/routes"

type AuthMenuProps = {}

const AuthMenu: React.FC<AuthMenuProps> = () => {
	const isAuth = true
	const isAdmin = true
	return (
		<Menu menuTitle="General">
			{isAuth ? (
				<>
					<MenuItem
						icon="MdAccountCircle"
						link="/profile"
						title="Profile"
					/>
					{isAdmin && (
						<MenuItem
							icon="MdOutlineLock"
							link={ADMIN}
							title="Admin panel"
						/>
					)}
					<MenuItem
						onClick={() => {}}
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
