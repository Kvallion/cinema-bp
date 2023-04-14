import cn from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

import s from "./MenuItem.module.scss"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { MaterialIcon, MaterialIconName } from "@entities/icon"

export type MenuItemProps = {
	icon: MaterialIconName
	title: string
	link: string
	onClick?: (...args: any[]) => any
	disableActive?: boolean
	className?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
	icon,
	title,
	link,
	disableActive = false,
	className,
	onClick,
}) => {
	const { asPath } = useRouter()
	return (
		<ListItem
			className={cn(s.item, className, {
				[s.active]: !disableActive && asPath === link,
			})}
		>
			<ListItemButton {...{ onClick }} className={s.list_btn}>
				<Link href={link} className={s.link}>
					<ListItemIcon className={s.icon_wrapper}>
						<MaterialIcon name={icon} className={s.icon} />
					</ListItemIcon>
					<ListItemText
						primary={title}
						primaryTypographyProps={{ classes: { root: s.text } }}
					/>
				</Link>
			</ListItemButton>
		</ListItem>
	)
}

export { MenuItem }
