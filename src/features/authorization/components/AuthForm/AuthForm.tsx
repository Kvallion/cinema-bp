import tw, { styled } from "twin.macro"
import { useAuthRedirect } from "@features/authorization/hooks/useAuthRedirect"
import useAuthForm from "./useAuthForm"
import {
	emailFieldConfig,
	passwordFieldConfig,
} from "@features/authorization/config/AuthFormConfig"
import { Stack } from "@shared/components/Stack"
import { Button } from "@ui/Button"
import { Heading1 } from "@ui/Heading1"
import LinkText from "@ui/LinkText/LinkText"
import { Paper } from "@ui/Paper"
import { TextField } from "@ui/TextField"

type AuthFormProps = {}

const AuthForm: React.FC<AuthFormProps> = () => {
	useAuthRedirect()
	const form = useAuthForm()
	return (
		<AirBlock>
			<form onSubmit={form.onSubmit}>
				<Stack spacing={4} className="mb-4">
					<Heading1 text="Authorization" />
					<TextField
						label="Email"
						labelLifted={form.doFieldsHaveContent.email}
						{...form.regInput("email", emailFieldConfig)}
						error={form.errors.email}
					/>
					<TextField
						type="password"
						label="Password"
						labelLifted={form.doFieldsHaveContent.password}
						{...form.regInput("password", passwordFieldConfig)}
						error={form.errors.password}
					/>

					<LinkText
						text={
							form.type === "login"
								? "Don't have an account? Sign up."
								: "Do you have account already? Sign in."
						}
						tw="self-start"
						onClick={form.switchType}
					/>
				</Stack>

				<Button
					type="submit"
					tw="mt-2 block"
					text={form.type === "login" ? "Sign in" : "Sign up"}
				/>
			</form>
		</AirBlock>
	)
}

const AirBlock = styled(Paper)(() => tw`w-1/2 mt-20 p-7 text-center`)

export { AuthForm }
