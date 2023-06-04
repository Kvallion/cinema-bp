import { useWindowDimensions } from "@hooks/useWindowDimensions"
import { md, ssm } from "@shared/consts/breakpoints"
import cn from "clsx"
import Image from "next/image"
import Link from "next/link"
import { Mousewheel, Navigation } from "swiper"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import tw, { css, styled } from "twin.macro"
import s from "./MultipleCarousel.module.scss"

type MultipleCarouselProps<T> = {
	data: T[]
	getId: (d: T) => string
	getImage: (d: T) => string
	imagePriority?: boolean
	getLink: (d: T) => string
	getTitle?: (d: T) => string
	getSubtitle?: (d: T) => string
}

function MultipleCarousel<T>({
	data,
	getId,
	getImage,
	imagePriority,
	getLink,
	getTitle,
	getSubtitle,
}: MultipleCarouselProps<T>) {
	const { width } = useWindowDimensions()
	const slidesPerView = width > md ? 4 : width > ssm ? 3 : 2
	return (
		<Carousel slidesPerView={slidesPerView}>
			{data.map(d => (
				<SwiperSlide key={getId(d)}>
					<SlideLink
						href={getLink(d)}
						className={cn({ [s.gradient]: !!getTitle })}
					>
						<SlideImage
							src={getImage(d)}
							alt={getTitle ? getTitle(d) : getLink(d)}
							fill
							priority={imagePriority}
						/>
						{getTitle && (
							<Info>
								<Title>{getTitle(d)}</Title>
								{getSubtitle && (
									<Subtitle>{getSubtitle(d)}</Subtitle>
								)}
							</Info>
						)}
					</SlideLink>
				</SwiperSlide>
			))}
		</Carousel>
	)
}

const Carousel = tw(Swiper)``
Carousel.defaultProps = {
	modules: [Navigation, Mousewheel],
	navigation: true,
	mousewheel: true,
	spaceBetween: 16,
}

const SlideLink = styled(Link)<{ withText?: boolean }>(({ withText }) => [
	tw`relative flex items-end h-72 rounded-layout shadow-lg overflow-hidden`,
	css`
		& {
			max-width: 200px;
			${withText && tw``}
		}
		&::before { // gradient
			${withText && tw`rounded-layout`}
		}
	`,
])

const SlideImage = tw(Image)`image-like-bg`
SlideImage.defaultProps = { draggable: false }

const Info = tw.div`relative z-2 m-3 w-full flex flex-col text-center`

const Title = tw.span`mb-1 font-semibold text-white text-shadow`

const Subtitle = tw.span`text-gray-500 text-shadow`

export { MultipleCarousel }

