import { useRouter } from "next/router"
import { useEffect } from "react"
import useCurrentUser from "./useCurrentUser"

export function useAuthRedirect() {
	const user = useCurrentUser()

	const { query, push } = useRouter()

	const redirect = query.redirect ? String(query.redirect) : "/"

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}
