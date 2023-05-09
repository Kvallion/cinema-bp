import { memo } from "react"
import tw from "twin.macro"
import { SkeletonLoader } from "@ui/SkeletonLoader"

const IconSelectSkeleton: React.FC = () => (
	<div>
		<SelectLabelSkeleton />
		<SkeletonLoader className="w-full h-10" />
	</div>
)

const SelectLabelSkeleton = tw(SkeletonLoader)`w-24 rounded-full h-4`

export default memo(IconSelectSkeleton)
