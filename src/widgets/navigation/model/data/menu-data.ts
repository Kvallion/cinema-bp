import { MenuProps } from "@entities/menu"

export const firstMenu: MenuProps = {
	menuTitle: "menu",
	items: [
		{ icon: "MdHome", link: "/", title: "Home" },
		{ icon: "MdExplore", link: "/discovery", title: "Discovery" },
		{ icon: "MdWineBar", link: "/fresh-movies", title: "Fresh movies" },
		{ icon: "MdWhatshot", link: "/trending", title: "Trending now" },
	],
}
