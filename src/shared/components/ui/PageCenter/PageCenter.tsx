import { WithChildren } from "@shared/types/utility/WithChildren"

const PageCenter: React.FC<WithChildren> = ({ children }) => {
	return (
		<div className="flex min-h-screen items-start justify-center">
			{children}
		</div>
	)
}

export { PageCenter }
