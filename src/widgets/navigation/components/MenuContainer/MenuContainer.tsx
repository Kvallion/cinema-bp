import dynamic from "next/dynamic"
import { memo } from "react"
import { firstMenu } from "@widgets/navigation/model/data/menu-data"
import { GenreMenu } from "@features/GenreMenu"
import { Menu } from "@entities/navigation"

const LazyAuthMenu = dynamic(
	async () => (await import("@features/authorization")).AuthMenu,
	{ ssr: false }
)

type MenuContainerProps = {}

const MenuContainer: React.FC<MenuContainerProps> = () => {
	return (
		<div>
			<Menu {...firstMenu} className="mb-14" />
			<GenreMenu />
			<LazyAuthMenu />
		</div>
	)
}

export default memo(MenuContainer)
