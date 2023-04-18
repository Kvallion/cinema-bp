export type AuthResonseUser = {
	_id: string
	email: string
	isAdmin: boolean
}

export type TokensResponse = {
	user: AuthResonseUser
	refreshToken: string
	accessToken: string
}

export type Error = {
	statusCode: number
	message: string
}
