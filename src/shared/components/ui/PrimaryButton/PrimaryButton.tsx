import cn from "clsx"
import Button, { ButtonProps } from "@mui/material/Button"

type PrimaryButtonProps = ButtonProps & {
	text: string
	wFull?: boolean
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	text,
	wFull,
	className,
	...props
}) => {
	return (
		<Button
			{...props}
			variant="contained"
			color="primary"
			className={cn("btn-primary p-2.5", className, {
				["w-full"]: wFull,
			})}
		>
			{text}
		</Button>
	)
}

export { PrimaryButton }
