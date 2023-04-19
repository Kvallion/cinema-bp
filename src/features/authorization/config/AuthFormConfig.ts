import { RegisterOptions } from "react-hook-form"
import {
	EmailIsRequired,
	EmailMustMatchPattern,
	PasswordIsRequired,
	PasswordMustBeStrong,
} from "../consts/messages"
import { strongPassword, validEmail } from "../consts/regex"
import { AuthForm } from "../model/types/auth.types"

export const emailFieldConfig: RegisterOptions<AuthForm, "email"> = {
	required: EmailIsRequired,
	pattern: { value: validEmail, message: EmailMustMatchPattern },
}

export const passwordFieldConfig: RegisterOptions<AuthForm, "password"> = {
	required: PasswordIsRequired,
	pattern: { value: strongPassword, message: PasswordMustBeStrong },
}
