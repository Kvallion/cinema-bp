import { MovieSearch } from "@features/MovieSearch"
import { SidebarPopularMovies } from "@features/SidebarPopularMovies"
import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import dynamic from "next/dynamic"
import s from "./Sidebar.module.scss"

const LazyFavorites = dynamic(
	async () => (await import("@features/SidebarFavorites")).SidebarFavorites,
	{ ssr: false }
)

type SidebarProps = WithClassesInjectionProps & {}

const Sidebar: React.FC<SidebarProps> = ({ cn }) => {
	return (
		<aside className={cn(s.sidebar)}>
			<MovieSearch />
			<div>
				<SidebarPopularMovies />
				<LazyFavorites />
			</div>
		</aside>
	)
}

export default withClasses(Sidebar)
