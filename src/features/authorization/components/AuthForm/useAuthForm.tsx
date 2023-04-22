import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDebouncedCallback } from "use-debounce"
import {
	useLoginMutation,
	useRegisterMutation,
} from "@features/authorization/api/authApi"
import { TokensResponse } from "@features/authorization/api/responses.types"
import {
	selectAuthFormData,
	useAuthFormActions,
} from "@features/authorization/model/authFormSlice"
import { useAuthActions } from "@features/authorization/model/authSlice"
import { AuthForm } from "@features/authorization/model/types/auth.types"
import { useAppSelector } from "@hooks/redux"

export default function useAuthForm() {
	const [type, setType] = useState<"register" | "login">("login")

	const defaultValues = useAppSelector(selectAuthFormData)
	const {
		register: regInput,
		handleSubmit,
		formState: { errors, dirtyFields },
		watch,
		reset,
	} = useForm<AuthForm>({
		mode: "onBlur",
		defaultValues,
	})

	const { setEmail, setPassword, clear } = useAuthFormActions()
	const [email, password] = watch(["email", "password"])

	const debouncedSaveForm = useDebouncedCallback(() => {
		setEmail(email)
		setPassword(password)
	}, 1000)

	useEffect(debouncedSaveForm, [email, password, debouncedSaveForm])

	const [register, {}] = useRegisterMutation()
	const [login, {}] = useLoginMutation()
	const { setCredentials } = useAuthActions()

	const onSubmit: SubmitHandler<AuthForm> = async ({ email, password }) => {
		let data: TokensResponse
		if (type === "register") {
			data = await register({ email, password }).unwrap()
		} else {
			data = await login({ email, password }).unwrap()
		}
		setCredentials(data)
		clearForm()
	}

	function clearForm() {
		clear()
		reset()
	}

	const doFieldsHaveContent: typeof dirtyFields = {
		email: dirtyFields.email || !!defaultValues.email,
		password: dirtyFields.password || !!defaultValues.password,
	}
	console.log(dirtyFields)
	return {
		type,
		regInput,
		onSubmit: handleSubmit(onSubmit),
		doFieldsHaveContent,
		errors,
		switchType: () => setType(type === "login" ? "register" : "login"),
		clear: clearForm,
	}
}
