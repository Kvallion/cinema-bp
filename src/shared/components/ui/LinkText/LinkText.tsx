import { ComponentProps } from "react"
import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import Link from "next/link"
import s from "./LinkText.module.scss"

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
		<Link
			{...props}
			href={href || ""}
			onClick={(e) => {
				if (!href) e.preventDefault()
				if (onClick) onClick(e)
			}}
			className={cn(s.link, className)}
		>
			{text}
		</Link>
	)
}

export default withClasses(LinkText)
