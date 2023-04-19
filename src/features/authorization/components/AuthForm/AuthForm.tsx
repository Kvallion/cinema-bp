import {
	emailFieldConfig,
	passwordFieldConfig,
} from "@features/authorization/config/AuthFormConfig"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import useAuthForm from "./useAuthForm"
import { PrimaryButton } from "@ui/PrimaryButton"
import { Heading1 } from "@ui/Heading1"

import s from "./AuthForm.module.scss"
import LinkText from "@ui/LinkText/LinkText"
import { useAuthRedirect } from "@features/authorization/hooks/useAuthRedirect"

type AuthFormProps = {}

const AuthForm: React.FC<AuthFormProps> = () => {
	useAuthRedirect()
	const form = useAuthForm()
	return (
		<Paper className={s.root}>
			<form onSubmit={form.onSubmit}>
				<Stack spacing={2}>
					<Heading1 text="Authorization" />
					<TextField
						label="Email"
						{...form.regInput("email", emailFieldConfig)}
						error={!!form.errors.email}
						helperText={form.errors.email?.message}
					/>
					<TextField
						label="Password"
						type="password"
						{...form.regInput("password", passwordFieldConfig)}
						error={!!form.errors.password}
						helperText={form.errors.password?.message}
					/>

					<LinkText
						text={
							form.type === "login"
								? "Don't have an account? Sign up."
								: "Do you have account already? Sign in."
						}
						classes={[s.link]}
						onClick={form.switchType}
					/>
				</Stack>

				<PrimaryButton
					type="submit"
					sx={{ mt: 2, display: "block" }}
					text={form.type === "login" ? "Sign in" : "Sign up"}
				/>
			</form>
		</Paper>
	)
}

export { AuthForm }
