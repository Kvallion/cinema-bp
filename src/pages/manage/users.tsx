import dynamic from "next/dynamic"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { NextPageAuth } from "@features/authorization"

const LazyUsersAdminTable = dynamic(
	async () => (await import("@widgets/UsersAdminTable")).UsersAdminTable,
	{ ssr: false }
)

const AdminUsersPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Users | Admin panel" />
			<AdminPageHeading className="mb-5">Users</AdminPageHeading>

			<LazyUsersAdminTable />
		</div>
	)
}
AdminUsersPage.onlyAdmin = true

export default AdminUsersPage
