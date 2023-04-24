import dynamic from "next/dynamic"
import { memo } from "react"
import tw from "twin.macro"
import { MovieSearch } from "@features/MovieSearch"
import { SidebarPanel } from "@entities/sidebar"

const LazyAuthMenu = dynamic(
	async () => (await import("@features/authorization")).AuthMenu,
	{ ssr: false }
)

type MobileSlidingNavProps = {
	className?: string
}

const MobileSlidingNav: React.FC<MobileSlidingNavProps> = ({ className }) => {
	return (
		<NavPanel className={className}>
			<div className="px-4 mb-10">
				<MovieSearch />
			</div>
			<LazyAuthMenu />
		</NavPanel>
	)
}

const NavPanel = tw(SidebarPanel)`w-2/3`

export default memo(MobileSlidingNav)
