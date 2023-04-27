import cn from "clsx"
import Image from "next/image"
import Link from "next/link"
import tw, { css, styled } from "twin.macro"
import s from "@shared/styles/gradient.module.scss"

type MovieStackCardProps = {
	posters: string[]
	title: string
	link: string
	className?: string
}

const MovieStackCard: React.FC<MovieStackCardProps> = ({
	title,
	link,
	posters,
	className,
}) => {
	const alt = title + "movie"
	return (
		<CardLink href={link} className={cn(s.gradient_vertical, className)}>
			<Poster src={posters[0]} alt={alt} />

			<Content>
				<Title>{title}</Title>
			</Content>

			<SecondPosterContainer className={s.gradient_vertical}>
				<BgPoster src={posters[1]} alt={"background movie image"} />
			</SecondPosterContainer>

			<ThirdPosterContainer className={s.gradient_vertical}>
				<BgPoster src={posters[2]} alt={"background movie image"} />
			</ThirdPosterContainer>
		</CardLink>
	)
}

const Poster = tw(Image)`rounded-layout image-like-bg z-2`
Poster.defaultProps = { draggable: false, fill: true }

const PosterBehindContainer = tw.div`
	absolute transition-transform before:z-1 before:rounded-layout`

const SecondPosterContainer = styled(PosterBehindContainer)(
	() => tw`z-1 -top-2 left-2.5 right-2.5 bottom-4`
)

const ThirdPosterContainer = styled(PosterBehindContainer)(
	() => tw`z-0 -top-3.5 left-5 right-5 bottom-8`
)

const BgPoster = tw(Poster)`z-0`

const Content = tw.div`relative z-3 bottom-0 m-3 w-full text-center`

const Title = tw.h3`mb-1 font-semibold text-white text-shadow`

const CardLink = styled(Link)(() => [
	tw`relative w-full max-w-sm h-44 inline-flex items-end transition-transform hover:-translate-y-1 before:rounded-layout before:z-3`,
	css`
		&:hover ${SecondPosterContainer} {
			transform: translate(20px, -3px);
		}
		&:hover ${ThirdPosterContainer} {
			transform: translate(40px, -5px);
		}
	`,
])

export { MovieStackCard }
