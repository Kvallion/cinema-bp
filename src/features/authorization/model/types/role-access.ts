import { NextPage } from "next"

export type RoleAccessConfig = {
	onlyAdmin?: boolean
	onlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage & RoleAccessConfig
