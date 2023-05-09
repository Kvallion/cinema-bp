import tw from "twin.macro"
import { SkeletonLoader } from "@ui/SkeletonLoader"

export const TextEditorSkeleton: React.FC = () => (
	<div>
		<EditorLabelSkeleton />
		<SkeletonLoader className="w-full h-96" />
	</div>
)

const EditorLabelSkeleton = tw(SkeletonLoader)`w-24 rounded-full h-4`
