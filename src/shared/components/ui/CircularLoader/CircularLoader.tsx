import cn from "clsx"
import { memo } from "react"
import { css } from "twin.macro"

type CircularLoaderProps = {
	className?: string
	variant?: "small" | "normal" | "large"
}

const CircularLoader: React.FC<CircularLoaderProps> = ({
	variant = "normal",
	className,
}) => {
	return (
		<div className={className} css={loader}>
			<div
				className={cn("lds-ring", {
					"w-20 h-20": variant === "normal",
					"w-14 h-14": variant === "small",
					"w-25 h-25": variant === "large",
				})}
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

const loader = css`
	--loader-color: #39393f;
	.lds-ring {
		display: inline-block;
		position: relative;
	}
	.lds-ring div {
		display: block;
		position: absolute;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		box-sizing: border-box;
		margin: 8px;
		border: 8px solid var(--loader-color);
		border-color: var(--loader-color) transparent transparent transparent;
		border-radius: 50%;
		width: 80%;
		height: 80%;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

export default memo(CircularLoader)
