import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { MovieEditForm } from "@widgets/MovieEditForm"
import { NextPageAuth } from "@features/authorization"

const MovieEditPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Edit movie | Admin panel" />
			<AdminPageHeading>Edit movie</AdminPageHeading>
			<MovieEditForm className="mt-5" />
		</div>
	)
}
MovieEditPage.onlyAdmin = true

export default MovieEditPage
