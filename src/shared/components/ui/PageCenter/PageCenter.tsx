import { WithChildren } from "@shared/types/utility/WithChildren"
import s from "./PageCenter.module.scss"

const PageCenter: React.FC<WithChildren> = ({ children }) => {
	return (
		<div className="flex min-h-screen items-center justify-center">
			{children}
		</div>
	)
}

export { PageCenter }
