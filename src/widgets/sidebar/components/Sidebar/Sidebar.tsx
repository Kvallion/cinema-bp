import cn from "clsx"
import dynamic from "next/dynamic"
import { memo } from "react"
import s from "./Sidebar.module.scss"
import { MovieSearch } from "@features/MovieSearch"
import { SidebarPopularMovies } from "@features/SidebarPopularMovies"

const LazyFavorites = dynamic(
	async () => (await import("@features/SidebarFavorites")).SidebarFavorites,
	{ ssr: false }
)

type SidebarProps = { className?: string }

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
	return (
		<aside className={cn(s.sidebar, className)}>
			<MovieSearch />
			<div>
				<SidebarPopularMovies />
				<LazyFavorites />
			</div>
		</aside>
	)
}

export default memo(Sidebar)
