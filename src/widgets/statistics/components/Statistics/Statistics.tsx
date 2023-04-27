import { memo } from "react"
import tw, { css, styled } from "twin.macro"
import { useGetUsersCountQuery } from "@entities/user"
import { CircularLoader } from "@ui/CircularLoader"
import { Paper } from "@ui/Paper"
import PopularMovie, {
	PopularMovieSkeleton,
} from "@widgets/statistics/PopularMovie"
import { useGetPopularMoviesQuery } from "@entities/movie"

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
						<PopularMovieSkeleton />
					) : (
						m && (
							<PopularMovie
								poster={m[0].bigPoster}
								slug={m[0].slug}
								movieTitle={m[0].title}
								openingCount={m[0].countOpened}
							/>
						)
					)}
				</BlockCenter>
			</SquarePaper>
		</div>
	)
}

const UsersCount = tw.span`mb-1 text-7xl font-medium`
const UsersCountSubtitle = tw.span`text-lg opacity-70`

const BlockCenter = tw.div`
	full-screen flex justify-center items-center
`
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
