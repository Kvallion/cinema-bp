import { MenuItem, MenuItemProps } from "../MenuItem"
import { WithChildren } from "@shared/types/utility/WithChildren"
import tw from "twin.macro"

type MenuBaseProps = {
	menuTitle: string
	className?: string
}

type MenuItems = { items: MenuItemProps[]; children?: never }
type MenuChildren = WithChildren & { items?: never }
export type MenuProps = MenuBaseProps & (MenuItems | MenuChildren)

const Menu: React.FC<MenuProps> = ({
	menuTitle,
	items,
	children,
	className,
}) => {
	return (
		<nav className={`${className} animate-fade`}>
			<MenuTitle>{menuTitle}</MenuTitle>
			<ul className="list-none p-0">
				{items
					? items.map(item => <MenuItem key={item.link} {...item} />)
					: children}
			</ul>
		</nav>
	)
}

const MenuTitle = tw.h4`
  pl-layout text-sm font-semibold uppercase text-gray-500
`

export { Menu }
