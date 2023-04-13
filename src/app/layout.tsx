import { CommonHead, MainProvider, store } from "application"
import NextProgressBar from "application/components/NextProgressBar"
import ReduxToast from "application/components/ReduxToast"
import { Provider } from "react-redux"
import "./globals.css"

export const metadata = {
	title: {
		template: "%s | Online cinema",
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<CommonHead />
			<body>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
