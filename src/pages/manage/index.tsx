import { NextPageAuth } from "@features/authorization"

const AdminPage: NextPageAuth = () => {
	return <div>Admin Page</div>
}

AdminPage.onlyAdmin = true

export default AdminPage
