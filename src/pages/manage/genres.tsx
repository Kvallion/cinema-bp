import dynamic from "next/dynamic"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { NextPageAuth } from "@features/authorization"

const LazyGenresAdminTable = dynamic(
	async () => (await import("@widgets/GenresAdminTable")).GenresAdminTable,
	{ ssr: false }
)

const AdminGenresPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Genres | Admin panel" />
			<AdminPageHeading className="mb-5">Genres</AdminPageHeading>

			<LazyGenresAdminTable />
		</div>
	)
}
AdminGenresPage.onlyAdmin = true

export default AdminGenresPage
