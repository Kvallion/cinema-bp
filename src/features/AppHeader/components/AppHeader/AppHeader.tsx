import { memo } from "react"
import tw from "twin.macro"
import { useLayoutActions } from "@app/model/LayoutSlice"
import { AppLogo, MenuButton } from "@entities/navigation"

type AppHeaderProps = { className?: string }

const AppHeader: React.FC<AppHeaderProps> = ({ className }) => {
	const { openSlidingPanel } = useLayoutActions()

	return (
		<Header className={className}>
			<MenuButton onClick={openSlidingPanel} />
			<AppLogo className="mx-auto" />
		</Header>
	)
}

const Header = tw.header`px-6 py-4 flex bg-gray-900`

export default memo(AppHeader)
