import { MenuItem } from "@components/layout/Navigation/components/MenuItem"
import { useAuth } from "@hooks/useAuth"
import { adminHomeUrl } from "@config/helpers/paths/api"
import { LogoutButton } from "../LogoutButton"

type AuthItemsProps = {}

const AuthItems: React.FC<AuthItemsProps> = () => {
	const { user } = useAuth()
	return (
		<>
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
							link={adminHomeUrl}
							title="Admin panel"
						/>
					)}
					<LogoutButton />
				</>
			) : (
				<>
					<MenuItem icon="MdLogin" link="/auth" title="Authorize" />
				</>
			)}
		</>
	)
}

export { AuthItems }
