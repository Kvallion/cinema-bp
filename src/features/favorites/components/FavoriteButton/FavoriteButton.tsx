import cn from "clsx"
import { useEffect, useState } from "react"
import tw, { css, styled } from "twin.macro"
import useFavorites from "@features/favorites/hooks/useFavorites"

type FavoriteBtnProps = {
	movieId: string
	className?: string
}

const FavoriteButton: React.FC<FavoriteBtnProps> = ({ movieId, className }) => {
	const [pressed, setPressed] = useState(false)

	const { favoriteMovies, toggleFavorite, isFetching } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return
		const isInFavorites = !!favoriteMovies.find(m => m._id === movieId)
		if (pressed !== isInFavorites) {
			setPressed(isInFavorites)
		}
	}, [movieId, favoriteMovies, pressed])

	return (
		<div className={cn("relative w-8 h-8", className)}>
			<Button
				onClick={() => {
					toggleFavorite(movieId)
					setPressed(prev => !prev)
				}}
				animate={pressed}
				style={{ backgroundImage: `url(/heart-animation.png)` }}
				disabled={isFetching}
			></Button>
		</div>
	)
}

const Button = styled.button<{ animate: boolean }>(({ animate }) => [
	tw`absolute -top-4 -left-8 h-16 w-24 z-3 bg-transparent bg-left bg-no-repeat pt-8`,
	css`
		background-size: 2900%;
	`,
	animate &&
		css`
			animation: heart-burst 0.8s steps(28) forwards;
		`,
])

export default FavoriteButton
