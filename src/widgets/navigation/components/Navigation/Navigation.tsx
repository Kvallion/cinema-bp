import { MenuContainer } from "../MenuContainer"
import cn from "clsx"
import { memo } from "react"
import tw from "twin.macro"
import { AppLogo } from "@entities/navigation"
import { SidebarPanel } from "@entities/sidebar"

type NavigationProps = { className?: string }

const Navigation: React.FC<NavigationProps> = ({ className }) => {
	return (
		<NavSidebar className={className} onClick={e => e.stopPropagation()}>
			<AppLogo className="mb-10 px-layout hidden xl:block" />
			<MenuContainer />
		</NavSidebar>
	)
}

const NavSidebar = tw(SidebarPanel)``
NavSidebar.defaultProps = { variant: "left" }

export default memo(Navigation)
