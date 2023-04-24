import { getAdminRoute } from "@shared/routes/routes"
import { VNavPanelItemProps } from "@entities/navigation"

export const adminNavItems: VNavPanelItemProps[] = [
	{ title: "Statistics", icon: "MdBarChart", link: getAdminRoute("") },
	{ title: "Users", icon: "MdPeople", link: getAdminRoute("/users") },
	{ title: "Movies", icon: "MdLocalMovies", link: getAdminRoute("/movies") },
	{
		title: "Actors",
		icon: "MdAccessibility",
		link: getAdminRoute("/actors"),
	},
	{
		title: "Genres",
		icon: "MdTheaterComedy",
		link: getAdminRoute("/genres"),
	},
]
