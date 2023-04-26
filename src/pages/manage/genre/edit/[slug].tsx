import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { NextPageAuth } from "@features/authorization"

const GenreEditPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Genres | Admin panel" />
			<AdminPageHeading className="mb-5">Genres</AdminPageHeading>
		</div>
	)
}
GenreEditPage.onlyAdmin = true

export default GenreEditPage
