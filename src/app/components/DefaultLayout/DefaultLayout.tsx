import cn from "clsx"
import dynamic from "next/dynamic"
import { selectShowPanel, useLayoutActions } from "@app/model/LayoutSlice"
import { useAppSelector } from "@hooks/redux"
import useDisableScroll from "@hooks/useDisableScrolll"
import dl from "../DefaultLayout/DefaultLayout.module.scss"
import { MobileSlidingNav } from "@widgets/navigation/components/MobileSlidingNav"
import { BackDrop } from "@ui/BackDrop"
import { Navigation } from "@widgets/navigation"
import { Sidebar } from "@widgets/sidebar"
import { AdminNavigation } from "@features/AdminNavigation"
import { AppHeader } from "@features/AppHeader"
import { WithChildren } from "@shared/types/utility/WithChildren"

const LazyMobileNavigation = dynamic(
	async () => (await import("@widgets/navigation")).MobileNavigation,
	{ ssr: false }
)

type DefaultLayoutProps = WithChildren & {
	onlyAdmin?: boolean
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
	children,
	onlyAdmin,
}) => {
	const showPanel = useAppSelector(selectShowPanel)
	const ref = useDisableScroll(showPanel)
	const { hideSlidingPanel } = useLayoutActions()
	return (
		<div className={dl.layout}>
			<div className={dl.top_part}>
				<AppHeader className={dl.header} />
				{onlyAdmin && (
					<AdminNavigation className={dl.admin_navigation} />
				)}
			</div>
			<Navigation
				className={cn(dl.navigation, { [dl.show]: showPanel })}
			/>
			<main className={dl.content} ref={ref}>
				{children}
			</main>
			<Sidebar className={dl.sidebar} />
			<LazyMobileNavigation className={dl.mobile_nav} />
			<MobileSlidingNav
				className={cn(dl.mobile_panel_nav, { [dl.show]: showPanel })}
			/>
			<BackDrop show={showPanel} hide={hideSlidingPanel} />
		</div>
	)
}

export default DefaultLayout
