import { useAppSelector } from "@hooks/redux"
import { selectCurrentUser } from "../model/authSlice"

export default function useCurrentUser() {
	return useAppSelector(selectCurrentUser)
}
