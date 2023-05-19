import cn from "clsx"
import Image from "next/image"
import Link from "next/link"
import { AnchorHTMLAttributes, LinkHTMLAttributes, memo } from "react"
import tw, { css, styled } from "twin.macro"
import g from "@styles/gradient.module.scss"

type ImageCardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant: "vertical" | "horizontal" | "responsive"
	image: string
	alt?: string
	imagePriority?: boolean
	link: string
	title?: string
	subtitle?: string
	jumpOnHover?: boolean
}

const ImageCard: React.FC<ImageCardProps> = ({
	variant,
	image,
	alt,
	imagePriority,
	link,
	title,
	subtitle,
	jumpOnHover,
	className,
	...rest
}) => {
	return (
		<Card
			{...rest}
			variant={variant}
			href={link}
			className={cn(className, { [g.gradient_vertical]: !!title })}
			jumpOnHover={jumpOnHover}
		>
			<StyledImage
				src={image}
				alt={alt || title || ""}
				fill
				priority={imagePriority}
			/>
			{title && (
				<Info>
					<Title>{title}</Title>
					{subtitle && <Subtitle>{subtitle}</Subtitle>}
				</Info>
			)}
		</Card>
	)
}

const Card = styled(Link)<Pick<ImageCardProps, "variant" | "jumpOnHover">>(
	({ variant, jumpOnHover }) => [
		tw`relative flex items-end overflow-hidden rounded-layout shadow-lg transition-transform transform`,
		variant === "vertical" && tw`h-72 w-1/5`,
		variant === "vertical" &&
			css`
				& {
					min-width: 100px;
					max-width: 200px;
				}
			`,
		variant === "horizontal" && tw`w-full h-44`,
		variant === "responsive" && tw`w-full pb-full`,
		jumpOnHover && tw`hover:-translate-y-1`,
	]
)

const StyledImage = tw(Image)`image-like-bg`
StyledImage.defaultProps = { draggable: false }

const Info = tw.div`relative z-2 m-3 w-full flex flex-col text-center`

const Title = tw.span`mb-1 font-semibold text-white text-shadow`

const Subtitle = tw.span`text-gray-500 text-shadow`

export default memo(ImageCard)
