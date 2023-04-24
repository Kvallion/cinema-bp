import { memo } from "react"
import tw, { styled } from "twin.macro"
import { mobileNavData } from "@widgets/navigation/model/data/menu-data"
import { HorizontalNavPanel } from "@entities/navigation"

type MobileNavigationProps = {
	className?: string
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className }) => {
	return (
		<HorizontalNavPanel
			variant="bottom"
			items={mobileNavData}
			className={className}
		/>
	)
}

export default memo(MobileNavigation)
