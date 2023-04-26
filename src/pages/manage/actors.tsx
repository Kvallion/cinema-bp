import dynamic from "next/dynamic"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { NextPageAuth } from "@features/authorization"

const LazyActorsAdminTable = dynamic(
	async () => (await import("@widgets/ActorsAdminTable")).ActorsAdminTable,
	{ ssr: false }
)

const AdminActorsPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Actors | Admin panel" />
			<AdminPageHeading className="mb-5">Actors</AdminPageHeading>

			<LazyActorsAdminTable />
		</div>
	)
}
AdminActorsPage.onlyAdmin = true

export default AdminActorsPage
