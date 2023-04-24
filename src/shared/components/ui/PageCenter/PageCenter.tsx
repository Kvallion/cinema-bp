import { WithChildren } from "@shared/types/utility/WithChildren"

const PageCenter: React.FC<WithChildren> = ({ children }) => {
	return <div className="flex justify-center">{children}</div>
}

export { PageCenter }
