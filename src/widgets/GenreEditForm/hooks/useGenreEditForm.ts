import { useRouter } from "next/router"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { GenreEditFormState, defaultValues } from "../model/GenreEditForm"
import { useGetGenreByIdQuery, useUpdateGenreMutation } from "@entities/genre"
import { MaterialIconName } from "@entities/icon"

export default function useGenreEditForm() {
	const { query } = useRouter()
	const id = query.id as string
	const { data } = useGetGenreByIdQuery(id)

	const { register, control, formState, handleSubmit, watch, setValue } =
		useForm<GenreEditFormState>({
			mode: "onSubmit",
			defaultValues,
		})

	useEffect(() => {
		if (data) {
			setValue("name", data.name, { shouldDirty: true })
			setValue("slug", data.slug, { shouldDirty: true })
			setValue("icon", data.icon as MaterialIconName, {
				shouldDirty: true,
			})
			setValue("description", data.description, { shouldDirty: true })
		}
	}, [data])

	const [name, slug, icon, description] = watch([
		"name",
		"slug",
		"icon",
		"description",
	])

	const { back } = useRouter()
	const [updateGenre, { isLoading: isSubmiting }] = useUpdateGenreMutation()

	const onSubmit: SubmitHandler<GenreEditFormState> = ({
		name,
		slug,
		description,
		icon,
	}) => {
		updateGenre({
			_id: id,
			name,
			slug,
			description,
			icon: icon || "",
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
		values: { name, slug, icon, description },
		slugDirty: formState.dirtyFields.slug,
		setSlug: (slug: string) =>
			setValue("slug", slug, { shouldDirty: false, shouldTouch: false }),
	}
}
