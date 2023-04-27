import { Actor } from "@entities/actor"
import { Genre } from "@entities/genre"

export type MovieParams = {
	year: number
	duration: number
	country: string
}

export type Movie = {
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
