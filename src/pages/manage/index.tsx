import tw from "twin.macro"
import { PageMeta } from "@shared/components/PageMeta"
import { AdminPageHeading } from "@ui/AdminPageHeader"
import { PageHeading } from "@ui/PageHeading"
import { Statistics } from "@widgets/statistics"
import { NextPageAuth } from "@features/authorization"

const AdminPage: NextPageAuth = () => {
	return (
		<div className="p-4 sm:p-11">
			<PageMeta title="Statistics | Admin panel" />
			<AdminPageHeading className="mb-5 text-center">
				Some statistics
			</AdminPageHeading>
			<Statistics />
		</div>
	)
}

AdminPage.onlyAdmin = true

export default AdminPage
