import {
	ActorEditFormState,
	defaultValues,
} from "../components/ActorEditForm/ActorEditForm.types"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useGetActorByIdQuery, useUpdateActorMutation } from "@entities/actor"

export default function useActorEditForm() {
	const { query } = useRouter()
	const id = query.id as string
	const { data } = useGetActorByIdQuery(id)

	const { register, control, formState, handleSubmit, watch, setValue } =
		useForm<ActorEditFormState>({
			mode: "onSubmit",
			defaultValues,
		})

	useEffect(() => {
		if (data) {
			setValue("name", data.name, { shouldDirty: true })
			setValue("slug", data.slug, { shouldDirty: true })
			setValue("photo", data.photo, { shouldDirty: true })
			setValue("birthDate", data.birthDate, { shouldDirty: true })
			setValue("birthPlace", data.birthPlace, { shouldDirty: true })
			setValue("careerPeriod", data.careerPeriod, { shouldDirty: true })
			setValue("miniBio", data.miniBio, { shouldDirty: true })
		}
	}, [data])

	const [name, slug, photo] = watch(["name", "slug", "photo"])

	const { back } = useRouter()
	const [updateActor, { isLoading: isSubmiting }] = useUpdateActorMutation()

	const onSubmit: SubmitHandler<ActorEditFormState> = data => {
		updateActor({ ...data, _id: id })
		back()
	}

	return {
		isLoading: !data,
		isSubmiting,
		register,
		control,
		onSubmit: handleSubmit(onSubmit),
		errors: formState.errors,
		values: { name, slug, photo },
		slugDirty: formState.dirtyFields.slug,
		setSlug: (slug: string) =>
			setValue("slug", slug, { shouldDirty: false, shouldTouch: false }),
	}
}
