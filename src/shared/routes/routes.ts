import { addSlash } from "@shared/lib/helper/routes"

export const ROOT = "/"

export const ADMIN = ROOT + "manage"
export const getAdminRoute = (endpoint: string) => ADMIN + addSlash(endpoint)

export const GENRE = ROOT + "genre"
export const getGenreRoute = (endpoint: string) => GENRE + addSlash(endpoint)

export const MOVIE = ROOT + "movie"
export const getMovieRoute = (endpoint: string) => GENRE + addSlash(endpoint)

export const TRENDING = ROOT + "trending"

export const FAVORITES = ROOT + "favorites"
