import { addSlash } from "@shared/lib/helper/routes"

export const ROOT = "/"

export const AUTH = ROOT + "auth"

export const ADMIN = ROOT + "manage"
export const getAdminRoute = (endpoint: string) => ADMIN + addSlash(endpoint)

export const GENRE = ROOT + "genre"
export const getGenreRoute = (endpoint: string) => GENRE + addSlash(endpoint)

export const MOVIE = ROOT + "movie"
export const getMovieRoute = (endpoint: string) => MOVIE + addSlash(endpoint)

export const ACTOR = ROOT + "actor"
export const getActorRoute = (endpoint: string) => ACTOR + addSlash(endpoint)

export const getEditUserRoute = (endpoint: string) =>
	ADMIN + "/user/edit" + addSlash(endpoint)

export const getEditGenreRoute = (endpoint: string) =>
	ADMIN + "/genre/edit" + addSlash(endpoint)

export const getEditActorRoute = (endpoint: string) =>
	ADMIN + "/actor/edit" + addSlash(endpoint)

export const getEditMovieRoute = (endpoint: string) =>
	ADMIN + "/movie/edit" + addSlash(endpoint)

export const TRENDING = ROOT + "trending"

export const FAVORITES = ROOT + "favorites"

export const PROFILE = ROOT + "/profile"
