import cn from "clsx"
import Image from "next/image"
import { memo } from "react"
import tw from "twin.macro"
import g from "@styles/gradient.module.scss"
import { WithChildren } from "@shared/types/utility/WithChildren"

type BannerProps = WithChildren & {
	image: string
	alt?: string
	className?: string
}

const Banner: React.FC<BannerProps> = ({ image, alt, children, className }) => {
	return (
		<Wrapper className={cn(g.gradient, className)}>
			<BgImage
				src={image}
				alt={alt || "Banner image"}
				fill
				priority
				tw="object-top"
			/>
			{children}
		</Wrapper>
	)
}

const Wrapper = tw.div`
    relative flex h-80 w-full flex-col justify-end overflow-hidden rounded-layout shadow-lg`

const BgImage = tw(Image)`absolute image-like-bg`
BgImage.defaultProps = { draggable: false }

export default memo(Banner)
