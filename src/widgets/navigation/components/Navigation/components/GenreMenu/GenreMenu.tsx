import { Menu } from "@components/layout/Navigation/components/Menu"

import SkeletonLoader from "@ui/SkeletonLoader"

import { usePopularGenres } from "./usePopularGenres"

type GenreMenuProps = {}

const GenreMenu: React.FC<GenreMenuProps> = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className="mx-8 mb-14">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu title="popular genres" items={data || []} />
	)
}

export { GenreMenu }
