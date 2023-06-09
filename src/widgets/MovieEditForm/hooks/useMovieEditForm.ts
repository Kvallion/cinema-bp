import {
	MovieEditFormState,
	defaultValues,
} from "../components/MovieEditForm/MovieEditForm.types"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { _ } from "@shared/consts/utility"
import { useGetAllActorsQuery } from "@entities/actor"
import { useGetAllGenresQuery } from "@entities/genre"
import { MaterialIconName } from "@entities/icon"
import { useGetMovieByIdQuery, useUpdateMovieMutation } from "@entities/movie"

export default function useMovieEditForm() {
	const { query } = useRouter()
	const id = query.id as string
	const { data } = useGetMovieByIdQuery(id)

	const { register, control, formState, handleSubmit, watch, setValue } =
		useForm<MovieEditFormState>({
			mode: "onSubmit",
			defaultValues,
		})

	const { data: actors } = useGetAllActorsQuery(_)
	const { data: genres } = useGetAllGenresQuery(_)

	useEffect(() => {
		if (data) {
			setValue("title", data.title, { shouldDirty: true })
			setValue("slug", data.slug, { shouldDirty: true })
			setValue("description", data.description, { shouldDirty: true })
			setValue("genres", data.genres, { shouldDirty: true })
			setValue("actors", data.actors, { shouldDirty: true })
			setValue("parameters.country", data.parameters?.country || "", {
				shouldDirty: true,
			})
			setValue("parameters.duration", data.parameters?.duration || 0, {
				shouldDirty: true,
			})
			setValue("parameters.year", data.parameters?.year || 0, {
				shouldDirty: true,
			})
			setValue("poster", data.poster, { shouldDirty: true })
			setValue("bigPoster", data.bigPoster, { shouldDirty: true })
			setValue("videoUrl", data.videoUrl, { shouldDirty: true })
		}
	}, [data])

	const title = watch("title")
	const videoUrl = watch("videoUrl")

	const { back } = useRouter()
	const [updateMovie, { isLoading: isSubmiting }] = useUpdateMovieMutation()

	const onSubmit: SubmitHandler<MovieEditFormState> = state => {
		updateMovie({
			_id: id,
			...state,
		})
		back()
	}

	return {
		isLoading: !data,
		isSubmiting,
		register,
		control,
		onSubmit: handleSubmit(onSubmit),
		errors: formState.errors,
		values: { title, videoUrl },
		genres,
		actors,
		slugDirty: formState.dirtyFields.slug,
		setSlug: (slug: string) =>
			setValue("slug", slug, { shouldDirty: false, shouldTouch: false }),
	}
}
