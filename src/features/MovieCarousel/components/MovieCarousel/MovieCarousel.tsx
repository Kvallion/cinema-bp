import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import tw, { css, styled } from "twin.macro"
import s from "./MovieCarousel.module.scss"
import { MaterialIcon } from "@entities/icon"
import { Movie } from "@entities/movie"
import { getMovieRoute } from "@shared/routes/routes"

type MovieCarouselProps = { movies: Movie[]; className?: string }

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies, className }) => {
	return (
		<>
			<Carousel
				navigation={{
					nextEl: ".MovieCarousel__ArrowNext",
					prevEl: ".MovieCarousel__ArrowPrev",
				}}
				className={className}
			>
				{movies.map(({ _id, bigPoster, slug, title, genres }) => (
					<SwiperSlide key={_id}>
						<SlideContentWrapper>
							<PosterLink
								href={getMovieRoute(slug)}
								className={s.gradient}
							>
								<Poster
									src={bigPoster}
									alt={`${title} movie`}
									fill
								/>
								<MovieInfo>
									<SlideHeading>{title}</SlideHeading>
									<Genres>
										{genres.map(g => g.name).join(", ")}
									</Genres>
								</MovieInfo>
							</PosterLink>
						</SlideContentWrapper>
					</SwiperSlide>
				))}
				<CarouselArrow
					direction="left"
					className="MovieCarousel__ArrowPrev"
				>
					<MaterialIcon name="MdChevronLeft" />
				</CarouselArrow>
				<CarouselArrow
					direction="right"
					className="MovieCarousel__ArrowNext"
				>
					<MaterialIcon name="MdChevronRight" />
				</CarouselArrow>
			</Carousel>
		</>
	)
}

const CarouselArrow = styled.button<{ direction: "left" | "right" }>(
	({ direction }) => [
		tw`hidden lg:block lg:opacity-0 absolute top-1/2 z-20 animate-fade rounded-full shadow-md p-2 text-2xl text-white transition-colors transition-opacity`,
		direction === "left" ? tw`left-3 ` : tw`right-3`,
		css`
			background-image: linear-gradient(
					rgba(255, 255, 255, 0.15),
					rgba(255, 255, 255, 0.15)
				),
				linear-gradient(rgba(59, 58, 62, 0.1), rgba(59, 58, 62, 0.1));
			&.swiper-button-disabled {
				${tw`bg-gray-600 bg-opacity-30 text-gray-500`}
			}
		`,
	]
)

const Carousel = styled(Swiper)(() => [
	tw`max-w-6xl mx-auto`,
	css`
		&:hover ${CarouselArrow} {
			${tw`lg:opacity-100`}
		}

		.swiper-pagination-bullet {
			${tw`opacity-100 bg-white bg-opacity-60 shadow-md transition-transform transition-colors`}
			--tw-shadow-color: rgba(0, 0, 0, 0.4);
			&-active {
				${tw` bg-opacity-100 transform scale-125`}
			}
		}
	`,
])
Carousel.defaultProps = {
	modules: [Navigation, Pagination, Mousewheel, Autoplay],
	slidesPerView: 1,
	mousewheel: true,
	pagination: { clickable: true },
	autoplay: { delay: 2500, pauseOnMouseEnter: true },
	loop: true,
}

const PosterLink = styled(Link)(() => [
	tw`absolute flex items-end block w-full h-full md:rounded-3xl`,
	css`
		&::before {
			${tw`md:rounded-3xl`}
		}
	`,
])

const Poster = tw(Image)`image-like-bg md:rounded-3xl`
Poster.defaultProps ={draggable: false, priority: true}

const MovieInfo = tw.div`relative w-full z-2 p-8`

const SlideHeading = styled.h2(() => [
	tw`mb-1 text-xl truncate md:text-4xl xl:text-5xl font-semibold uppercase text-white text-shadow`,
	css`
		max-width: 80%;
	`,
])

const Genres = styled.p(() => [
	tw`mb-4 truncate text-xs md:text-base font-medium uppercase text-gray-300 text-shadow`,
	css`
		max-width: 80%;
	`,
])

const SlideContentWrapper = styled.div(() => [
	tw`w-full`,
	css`
		padding-bottom: 40%;
	`,
])

export default memo(MovieCarousel)
