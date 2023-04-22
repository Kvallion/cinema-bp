import Link from "next/link"
import { useRouter } from "next/router"
import tw, { css, styled } from "twin.macro"
import { MaterialIcon, MaterialIconName } from "@entities/icon"

export type MenuItemProps = {
	icon: MaterialIconName
	title: string
	link: string
	onClick?: (...args: any[]) => any
	disableActive?: boolean
	className?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
	icon,
	title,
	link,
	disableActive = false,
	className,
	onClick,
}) => {
	const { asPath } = useRouter()
	const active = !disableActive && asPath === link
	return (
		<MItem active={active} className={className}>
			<ListButton {...{ onClick }}>
				<StyledLink href={link}>
					<Icon name={icon} active={active} />
					<Title active={active}>{title}</Title>
				</StyledLink>
			</ListButton>
		</MItem>
	)
}

const ListButton = tw.button`
  
`

const StyledLink = tw(Link)`
	flex cursor-pointer items-center px-3 text-gray-600
`

type IconProps = { active: boolean }
const Icon = styled(MaterialIcon)<IconProps>(({ active }) => [
	tw`text-2lg text-gray-600 transition-colors`,
	active && tw`fill-primary`,
])

const Title = styled.span<{ active: boolean }>(({ active }) => [
	tw`ml-3 text-lg transition-colors`,
	active && tw`text-white`,
])

const MItem = styled.li<{ active: boolean }>(({ active }) => [
	tw`mt-6 border-r-4 border-r-transparent px-8 transition-colors`,
	css`
		&:hover ${Title} {
			${tw`text-white`}
		}
		&:hover ${Icon} {
			${!active && tw`fill-white`}
		}
	`,
	active && tw`border-r-primary`,
])

export { MenuItem }
