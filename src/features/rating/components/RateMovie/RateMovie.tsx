import { memo } from "react"
import StarRating from "react-star-rating-component"
import tw, { css, styled } from "twin.macro"
import useRating from "@features/rating/hooks/useRating"
import AuthButton from "@features/authorization/components/AuthButton"
import { getMovieRoute } from "@shared/routes/routes"

type RateMovieProps = {
	movieId: string
	slug: string
}

const RateMovie: React.FC<RateMovieProps> = ({ movieId, slug }) => {
	const { user, rating, rated, handleClick, isLoading } = useRating(movieId)

	return (
		<Wrapper>
			{!rated && (
				<>
					<Heading>
						Did you like the movie?
						<br /> Please rate it.
					</Heading>
					<Subheading>
						The Rating improves movie recommendations.
					</Subheading>
				</>
			)}
			{user ? (
				<>
					<div className="text-4xl">
						<StarRating
							name="movie-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					</div>

					{rated && <Thanks>Thank you for your feedback!</Thanks>}
				</>
			) : (
				<AuthButton originUrl={getMovieRoute(slug)} />
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div(() => [
	tw`air-block mx-auto my-10 w-1/2 p-7 text-center`,
	css`
		.dv-star-rating {
			${tw``}
		}
	`,
])

const Heading = tw.h4`text-2xl font-semibold`

const Subheading = tw.span`mt-2 mb-3 text-sm opacity-60`

const Thanks = tw.p`animate-scaleIn text-xl font-semibold text-yellow-700`

export default memo(RateMovie)
