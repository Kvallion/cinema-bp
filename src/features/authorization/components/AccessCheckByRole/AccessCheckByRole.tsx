import { selectCurrentUser } from "@features/authorization/model/authSlice"
import { RoleAccessConfig } from "@features/authorization/types/role-access"
import { useAppSelector } from "@hooks/redux"
import { useRouter } from "next/router"

const AccessCheckByRole: React.FC<RoleAccessConfig> = ({
	onlyAdmin,
	onlyUser,
}) => {
	const { replace } = useRouter()
	const user = useAppSelector(selectCurrentUser)

	const isPublic = !onlyAdmin && !onlyUser

	if (!user) {
		if (isPublic) return <></>
		replace("/auth")
	} else {
		if (user.isAdmin) return <></>

		if (onlyAdmin) replace("/404")
	}

	return <></>
}

export default AccessCheckByRole
