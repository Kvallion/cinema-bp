import { memo } from "react"
import tw, { styled } from "twin.macro"
import { mobileNavData } from "@widgets/navigation/model/data/menu-data"
import { useCurrentUser } from "@features/authorization"
import { HorizontalNavPanel } from "@entities/navigation"
import { FAVORITES } from "@shared/routes/routes"

type MobileNavigationProps = {
	className?: string
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className }) => {
	const user = useCurrentUser()
	let data = mobileNavData
	if (!user) {
		data = mobileNavData.filter(i => i.link !== FAVORITES)
	}
	return (
		<HorizontalNavPanel
			variant="bottom"
			items={data}
			className={className}
		/>
	)
}

export default memo(MobileNavigation)
