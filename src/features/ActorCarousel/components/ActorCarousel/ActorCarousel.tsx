import { useGetAllActorsQuery } from "@entities/actor/api/actorApi"
import { SectionHeading } from "@ui/SectionHeading"
import { Actor } from "@entities/actor"
import { MultipleCarousel } from "@entities/сarousel"
import { getActorRoute } from "@shared/routes/routes"

type ActorCarouselProps = {
	className?: string
	title?: string
	getSubtitle?: (a: Actor) => string
	actors: Actor[]
}

const ActorCarousel: React.FC<ActorCarouselProps> = ({
	title,
	getSubtitle,
	actors,
	className,
}) => {
	return (
		<section className={className}>
			{title && <SectionHeading className="mb-5">{title}</SectionHeading>}
			<MultipleCarousel
				data={actors || []}
				imagePriority
				getId={a => a._id}
				getLink={a => getActorRoute(a.slug)}
				getImage={a => a.photo}
				getTitle={a => a.name}
				getSubtitle={getSubtitle}
			/>
		</section>
	)
}

export default ActorCarousel
