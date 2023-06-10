import Image from "next/image"
import { memo } from "react"
import tw, { css, styled } from "twin.macro"
import Info from "@entities/table/components/Info"
import { Stack } from "@shared/components/Stack"
import { PageHeading } from "@ui/PageHeading"
import { Actor } from "@entities/actor"

type ActorInfoProps = { actor: Actor }

const ActorInfo: React.FC<ActorInfoProps> = ({
	actor: { photo, name, countMovies },
}) => {
	return (
		<Grid>
			<div className="w-full px-10 ssm:w-1/3 ssm:px-0">
				<PhotoRatio>
					<Photo src={photo} alt={`${name} photo`} fill priority />
				</PhotoRatio>
			</div>

			<Stack spacing={3} className="ssm:col-span-2">
				<Heading>{name}</Heading>
				<Subtitle>About</Subtitle>
				<Info
					titles={[
						"Birth date",
						"Place of birth",
						"Total movies",
						"Genres",
						"Career period",
					]}
					values={[
						1999,
						"USA",
						countMovies,
						["Drama", "Thriller"],
						"2008-2023",
					]}
				/>
			</Stack>
		</Grid>
	)
}
const Grid = styled.div(() => [tw`flex flex-col ssm:flex-row gap-10`])

const PhotoRatio = tw.div`ratio-2-3`
const Photo = tw(Image)`full-screen rounded-layout image-like-bg`
Photo.defaultProps = { draggable: false }

const Heading = tw.h1`text-white text-4xl font-bold`
const Subtitle = tw.span`text-white text-lg font-bold`

export default memo(ActorInfo)
