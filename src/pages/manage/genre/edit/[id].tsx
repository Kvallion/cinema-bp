import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { GenreEditForm } from "@widgets/GenreEditForm"
import { NextPageAuth } from "@features/authorization"

const GenreEditPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Edit genre | Admin panel" />
			<AdminPageHeading>Edit genre</AdminPageHeading>
			<GenreEditForm className="mt-5" />
		</div>
	)
}
GenreEditPage.onlyAdmin = true

export default GenreEditPage
