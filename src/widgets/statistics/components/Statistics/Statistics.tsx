import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import tw, { css, styled } from "twin.macro"
import { useGetUsersCountQuery } from "@entities/user"
import { _ } from "@shared/consts/utility"
import { CircularLoader } from "@ui/CircularLoader"
import { Paper } from "@ui/Paper"
import { useGetPopularMoviesQuery } from "@entities/movie"
import { getMovieRoute } from "@shared/routes/routes"

type StatisticsProps = {}

const Statistics: React.FC<StatisticsProps> = () => {
	const { data: usersCount, isLoading: isCountLoading } =
		useGetUsersCountQuery()

	const { data: m, isLoading } = useGetPopularMoviesQuery()
	return (
		<div className="flex flex-col sm:flex-row gap-16 justify-center">
			<SquarePaper className="sm:mr-auto">
				<BlockCenter>
					{isCountLoading ? (
						<CircularLoader variant="small" />
					) : (
						<div className="flex flex-col">
							<UsersCount>{usersCount}</UsersCount>
							<UsersCountSubtitle>Users</UsersCountSubtitle>
						</div>
					)}
				</BlockCenter>
			</SquarePaper>
			<SquarePaper>
				<BlockCenter className="p-5 flex-col">
					{isLoading ? (
						<></>
					) : (
						m && (
							<>
								<Title>The most popular movie</Title>
								<Subtitle>
									Opened {m[0].countOpened} times
								</Subtitle>
								<PosterRatio>
									<PosterLink href={getMovieRoute(m[0].slug)}>
										<Poster
											src={m[0].bigPoster}
											alt={m[0].title + "movie"}
										/>
									</PosterLink>
								</PosterRatio>
							</>
						)
					)}
				</BlockCenter>
			</SquarePaper>
		</div>
	)
}

const UsersCount = tw.span`mb-1 text-7xl font-medium`
const UsersCountSubtitle = tw.span`text-lg opacity-70`

const Title = tw.h2`text-white font-semibold text-base sm:text-2xl text-center`
const Subtitle = tw.p`mb-3 font-medium opacity-50 text-sm sm:text-base`

const BlockCenter = tw.div`
	full-screen flex justify-center items-center
`

const PosterLink = tw(Link)`block full-screen`

const Poster = tw(Image)`image-like-bg`
Poster.defaultProps = { fill: true, draggable: false }

const PosterRatio = styled.div(() => [
	tw`relative w-full rounded-layout overflow-hidden`,
	css`
		padding-bottom: 60%;
	`,
])

const SquarePaper = styled(Paper)(() => [
	tw`relative w-4/5 mx-auto sm:mx-0 sm:w-2/5 overflow-hidden`,
	css`
		padding-bottom: 80%;
		@media (min-width: 640px) {
			padding-bottom: 40%;
		}
	`,
])

export default memo(Statistics)
