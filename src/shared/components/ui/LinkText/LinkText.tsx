import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import Link from "next/link"
import { ComponentProps } from "react"
import tw, { styled } from "twin.macro"

type LinkTextOwnProps = WithClassesInjectionProps & {
	href?: string
	text: string
}

type LinkTextProps = LinkTextOwnProps &
	Omit<ComponentProps<"a">, keyof LinkTextOwnProps | "ref" | "children">

const LinkText: React.FC<LinkTextProps> = ({
	href,
	text,
	cn,
	className,
	onClick,
	...props
}) => {
	return (
		<StyledLink
			{...props}
			href={href || ""}
			onClick={e => {
				if (!href) e.preventDefault()
				if (onClick) onClick(e)
			}}
			className={className}
		>
			{text}
		</StyledLink>
	)
}

const StyledLink = styled(Link)(() => tw`text-sm text-gray-600 underline`)

export default withClasses(LinkText)
