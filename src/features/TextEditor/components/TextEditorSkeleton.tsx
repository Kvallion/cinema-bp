import tw from "twin.macro"
import { FieldLabelSkeleton } from "@ui/FieldLabelSkeleton"
import { SkeletonLoader } from "@ui/SkeletonLoader"

export const TextEditorSkeleton: React.FC = () => (
	<div>
		<FieldLabelSkeleton />
		<SkeletonLoader className="w-full h-96" />
	</div>
)
