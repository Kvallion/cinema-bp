import dynamic from "next/dynamic"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { NextPageAuth } from "@features/authorization"

const LazyMoviesAdminTable = dynamic(
	async () => (await import("@widgets/MoviesAdminTable")).MoviesAdminTable,
	{ ssr: false }
)

const AdminMoviesPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Movies | Admin panel" />
			<AdminPageHeading className="mb-5">Movies</AdminPageHeading>

			<LazyMoviesAdminTable />
		</div>
	)
}
AdminMoviesPage.onlyAdmin = true

export default AdminMoviesPage
