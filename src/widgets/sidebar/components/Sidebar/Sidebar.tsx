import cn from "clsx"
import dynamic from "next/dynamic"
import { memo } from "react"
import tw from "twin.macro"
import { MovieSearch } from "@features/MovieSearch"
import { SidebarPopularMovies } from "@features/SidebarPopularMovies"

const LazyFavorites = dynamic(
	async () => (await import("@features/SidebarFavorites")).SidebarFavorites,
	{ ssr: false }
)

type SidebarProps = { className?: string }

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
	return (
		<Aside className={className}>
			<MovieSearch />
			<div>
				<SidebarPopularMovies />
				<LazyFavorites />
			</div>
		</Aside>
	)
}

const Aside = tw.aside`border-l border-l-gray-800 bg-gray-900 px-8 py-11`

export default memo(Sidebar)
