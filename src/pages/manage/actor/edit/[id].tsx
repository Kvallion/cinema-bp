import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { ActorEditForm } from "@widgets/ActorEditForm"
import { NextPageAuth } from "@features/authorization"

const ActorEditPage: NextPageAuth = () => {
	return (
		<div className="py-4 px-12 sm:p-11">
			<PageMeta title="Edit actor | Admin panel" />
			<AdminPageHeading>Edit actor</AdminPageHeading>
			<ActorEditForm className="mt-5" />
		</div>
	)
}
ActorEditPage.onlyAdmin = true

export default ActorEditPage
