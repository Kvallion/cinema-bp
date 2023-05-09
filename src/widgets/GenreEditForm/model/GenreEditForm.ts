import { MaterialIconName } from "@entities/icon"

export interface GenreEditFormState {
	name: string
	slug: string
	icon: MaterialIconName | null
	description: string
}

export const defaultValues: GenreEditFormState = {
	name: "",
	slug: "",
	icon: null,
	description: "",
}
