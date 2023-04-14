import { Menu } from "@entities/menu"
import { AuthMenu } from "@features/auth-menu"
import { GenreMenu } from "@features/genre-menu"
import { firstMenu } from "@widgets/navigation/model/data/menu-data"
import s from "./MenuContainer.module.scss"

type MenuContainerProps = {}

const MenuContainer: React.FC<MenuContainerProps> = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<GenreMenu />
			<AuthMenu />
		</div>
	)
}

export { MenuContainer }
