import { useAppDispatch } from "@hooks/redux"
import { Navigation } from "@widgets/navigation"
import { Sidebar } from "@widgets/sidebar"
import { WithChildren } from "shared/types/utility/WithChildren"

import s from "./DefaultLayout.module.scss"

const DefaultLayout: React.FC<WithChildren> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation classes={[s.navigation]} />
			<main className={s.content}>{children}</main>
			<Sidebar classes={[s.sidebar]} />
		</div>
	)
}

export default DefaultLayout
