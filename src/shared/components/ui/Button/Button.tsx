import cn from "clsx"
import { ButtonHTMLAttributes } from "react"
import tw, { styled } from "twin.macro"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string
	variant?: "primary" | "secondary"
	wFull?: boolean
}

const Button: React.FC<ButtonProps> = ({
	text,
	variant = "primary",
	wFull,
	...props
}) => {
	return (
		<StyledButton variant={variant} wFull={wFull} {...props}>
			{text}
		</StyledButton>
	)
}

type StyledButtonProps = Pick<ButtonProps, "wFull" | "variant">
const StyledButton = styled.button<StyledButtonProps>(
	({ wFull, variant, disabled }) => [
		tw`btn-primary py-2.5 px-10 bg-primary`,
		disabled && tw`bg-opacity-70`,
		wFull && tw`w-full`,
		variant === "secondary" && tw`bg-gray-700 hover:bg-gray-600`,
	]
)

export { Button }
