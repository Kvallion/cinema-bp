import Link from "next/link"
import { useRouter } from "next/router"
import { memo } from "react"
import { FC } from "react"
import tw, { css, styled } from "twin.macro"
import { MaterialIcon, MaterialIconName } from "@entities/icon"

export type VNavPanelItemProps = {
	icon: MaterialIconName
	title: string
	link: string
}

type HorizontalNavPanelPropsProps = {
	variant: "top" | "bottom"
	items: VNavPanelItemProps[]
	className?: string
}
type Variant = Pick<HorizontalNavPanelPropsProps, "variant">

const HorizontalNavPanel: FC<HorizontalNavPanelPropsProps> = ({
	variant,
	items,
	className,
}) => {
	const { asPath } = useRouter()
	return (
		<Panel variant={variant} className={className}>
			<NavItemList variant={variant}>
				{items.map(({ link, icon, title }) => (
					<NavItem key={link}>
						<ItemLink
							href={link}
							active={asPath === link}
							variant={variant}
						>
							<ItemIcon name={icon} active={asPath === link} />
							<ItemTitle>{title}</ItemTitle>
						</ItemLink>
					</NavItem>
				))}
			</NavItemList>
		</Panel>
	)
}

const Panel = styled.nav<Variant>(({ variant }) => [
	tw`bg-gray-900 border-gray-800`,
	variant === "top" && tw`border-b`,
	variant === "bottom" && tw`border-t`,
])

const NavItemList = styled.ul<Variant>(({ variant }) => [
	tw`flex`,
	variant === "top" ? tw`items-end` : tw`items-start`,
])

const NavItem = tw.li`flex-grow`

const ItemLink = styled(Link)<{ active: boolean } & Variant>(
	({ active, variant }) => [
		tw`relative block flex flex-col md:flex-row items-center justify-center px-2 md:px-5 py-4 text-center text-lg text-white text-opacity-60 transition-colors hover:text-opacity-100`,
		active && tw`text-opacity-100`,
		css`
			&::after {
				${tw`absolute left-0 h-1 w-full bg-transparent transition-colors`}
				content: "";
				${variant === "top" ? tw`bottom-0` : tw`top-0`}
				${active && tw`bg-primary`}
			}
		`,
	]
)

const ItemIcon = styled(MaterialIcon)<{ active: boolean }>(({ active }) => [
	tw`text-3xl md:text-2lg mb-1 md:mb-0 md:mr-3`,
])
const ItemTitle = tw.span`text-xs md:text-lg`

export default memo(HorizontalNavPanel)
