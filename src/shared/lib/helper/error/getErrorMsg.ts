export function getErrorMsg(error: any): string {
	if (error.response && error.response.data) {
		if (Array.isArray(error.response.data.message))
			return error.response.data.message[0]
		else return error.response.data.message
	} else {
		return error.message
	}
}
