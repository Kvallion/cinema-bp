import { memo } from "react"
import { useGetAllActorsQuery } from "@entities/actor/api/actorApi"
import { SectionHeading } from "@ui/SectionHeading"
import { MultipleCarousel } from "@entities/сarousel"
import { getActorRoute } from "@shared/routes/routes"

type ActorCarouselProps = { className?: string }

const ActorCarousel: React.FC<ActorCarouselProps> = ({ className }) => {
	const { data: actors } = useGetAllActorsQuery({ limit: 7 })
	return (
		<section className={className}>
			<SectionHeading className="mb-5">Popular actors</SectionHeading>
			<MultipleCarousel
				data={actors || []}
				imagePriority
				getId={a => a._id}
				getLink={a => getActorRoute(a.slug)}
				getImage={a => a.photo}
				getTitle={a => a.name}
				getSubtitle={a => `${a.countMovies} movies`}
			/>
		</section>
	)
}

export default memo(ActorCarousel)
