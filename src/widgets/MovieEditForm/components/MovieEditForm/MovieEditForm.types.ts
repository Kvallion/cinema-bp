import { Movie } from "@entities/movie"

export type MovieEditFormState = Omit<
	Movie,
	"_id" | "countOpened" | "rating"
> & {}

export const defaultValues: MovieEditFormState = {
	title: "",
	slug: "",
	description: "",
	genres: [],
	actors: [],
	parameters: {
		country: "",
		duration: 0,
		year: 0,
	},
	poster: "",
	bigPoster: "",
	videoUrl: "",
}
