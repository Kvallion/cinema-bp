import { VNavPanelItemProps } from "@entities/navigation/components/HorizontalNavPanel/HorizontalNavPanel"
import { MenuProps } from "@entities/navigation"
import { ADMIN, FAVORITES, PROFILE } from "@shared/routes/routes"

export const firstMenu: MenuProps = {
	menuTitle: "menu",
	items: [
		{ icon: "MdHome", link: "/", title: "Home" },
		{ icon: "MdExplore", link: "/discovery", title: "Discovery" },
		{ icon: "MdWineBar", link: "/fresh-movies", title: "Fresh movies" },
		{ icon: "MdWhatshot", link: "/trending", title: "Trending now" },
	],
}

export const mobileNavData: VNavPanelItemProps[] = [
	{ icon: "MdExplore", link: "/discovery", title: "Discovery" },
	{ icon: "MdWineBar", link: "/fresh-movies", title: "Fresh movies" },
	{ icon: "MdWhatshot", link: "/trending", title: "Trending now" },
	{ icon: "MdFavorite", link: FAVORITES, title: "Your favorites" },
]
