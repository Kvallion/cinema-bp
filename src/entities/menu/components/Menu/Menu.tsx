import dynamic from "next/dynamic"
import List from "@mui/material/List"

import { MenuItem, MenuItemProps } from "../MenuItem"

import s from "./Menu.module.scss"
import { WithChildren } from "@shared/types/utility/WithChildren"

// const DynamicAuthItems = dynamic(
// 	async () =>
// 		(
// 			await import(
// 				"../../../../widgets/navigation/components/Navigation/components/AuthItems"
// 			)
// 		).AuthItems,
// 	{ ssr: false }
// )

type MenuBaseProps = {
	menuTitle: string
}

type MenuItems = { items: MenuItemProps[]; children?: never }
type MenuChildren = WithChildren & { items?: never }
export type MenuProps = MenuBaseProps & (MenuItems | MenuChildren)

const Menu: React.FC<MenuProps> = ({ menuTitle, items, children }) => {
	return (
		<nav className={s.menu}>
			<h4 className={s.heading}>{menuTitle}</h4>
			<List className={s.list}>
				{items
					? items.map((item) => (
							<MenuItem key={item.link} {...item} />
					  ))
					: children}
			</List>
		</nav>
	)
}

export { Menu }
