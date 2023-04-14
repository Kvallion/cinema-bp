import { Genre } from "@entities/genre"

export interface Actor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface MovieParams {
	year: number
	duration: number
	country: string
}

export interface Movie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	description: string
	parameters: MovieParams
	genres: Genre[]
	actors: Actor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
