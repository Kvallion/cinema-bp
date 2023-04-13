import { WithChildren } from "shared/types/utility/WithChildren"
import { Navigation } from "../Navigation"
import s from "./DefaultLayout.module.scss"

const DefaultLayout: React.FC<WithChildren> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation classes={[s.navigation]} />
			{/* <Sidebar /> */}
			{children}
		</div>
	)
}

export default DefaultLayout
