import { getErrorMsg } from "../error/getErrorMsg"
import { toastr } from "react-redux-toastr"

export function toastError(error: any, title?: string) {
	const message = getErrorMsg(error)
	toastr.error(title || "Error request", message)
	throw message
}
