import { Menu } from "@entities/menu"
import { GenreMenu } from "@features/GenreMenu"
import { firstMenu } from "@widgets/navigation/model/data/menu-data"
import dynamic from "next/dynamic"
import s from "./MenuContainer.module.scss"

const LazyAuthMenu = dynamic(
	async () => (await import("@features/AuthMenu")).AuthMenu,
	{ ssr: false }
)

type MenuContainerProps = {}

const MenuContainer: React.FC<MenuContainerProps> = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<GenreMenu />
			<LazyAuthMenu />
		</div>
	)
}

export { MenuContainer }
