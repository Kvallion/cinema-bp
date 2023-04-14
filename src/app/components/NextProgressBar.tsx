import _NextProgressBar from "nextjs-progressbar"
import { accentColor } from "shared/consts/colors"

const NextProgressBar: React.FC = () => {
	return (
		<_NextProgressBar
			color={accentColor}
			startPosition={0.3}
			height={3}
			stopDelayMs={200}
		/>
	)
}

export default NextProgressBar
