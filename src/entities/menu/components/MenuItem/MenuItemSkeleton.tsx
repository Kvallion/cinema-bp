import tw, { css, styled } from "twin.macro"
import { SkeletonLoader } from "@ui/SkeletonLoader"

type MenuItemSkeletonProps = {}

const MenuItemSkeleton: React.FC<MenuItemSkeletonProps> = () => {
	return (
		<Wrapper>
			<IconSkeleton />
			<TitleSkeleton />
		</Wrapper>
	)
}

const Wrapper = styled.div(({}) => [
	tw`mt-6 flex justify-stretch w-full px-11`,
	css`
		& > *:last-child {
			${tw`flex-grow relative`}
		}
	`,
])

const IconSkeleton = styled(SkeletonLoader)(() => tw`mr-3 w-8 h-8 rounded-full`)

const TitleSkeleton = styled(SkeletonLoader)(() => [
	tw`h-5 rounded-full`,
	css`
		${Wrapper}:nth-child(2n + 1)  & {
			width: 60%;
		}
		${Wrapper}:nth-child(2n)  & {
			width: 80%;
		}
		${Wrapper}:nth-child(3n)  & {
			width: 45%;
		}
		top: 50%;
		transform: translateY(-56%);
	`,
])

export default MenuItemSkeleton
