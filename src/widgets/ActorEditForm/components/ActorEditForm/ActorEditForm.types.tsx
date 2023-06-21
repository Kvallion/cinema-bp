import { Actor } from "@entities/actor"

export type ActorEditFormState = Omit<Actor, "_id" | "countMovies"> & {}

export const defaultValues: ActorEditFormState = {
	name: "",
	slug: "",
	photo: "",
	birthDate: "",
	birthPlace: "",
	careerPeriod: "",
	miniBio: "",
}
