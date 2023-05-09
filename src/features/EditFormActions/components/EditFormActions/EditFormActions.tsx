import cn from "clsx"
import { useRouter } from "next/router"
import { memo } from "react"
import { Button } from "@ui/Button"

type EditFormActionsProps = { className?: string; submitDisabled?: boolean }

const EditFormActions: React.FC<EditFormActionsProps> = ({
	submitDisabled,
	className,
}) => {
	const { back } = useRouter()
	return (
		<div className={cn("flex gap-2", className)}>
			<Button
				variant="primary"
				type="submit"
				text="Save"
				disabled={submitDisabled}
			/>
			<Button
				variant="secondary"
				type="button"
				onClick={back}
				text="Back"
			/>
		</div>
	)
}

export default memo(EditFormActions)
