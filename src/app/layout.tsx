import { CommonHead, MainProvider } from "application"
import "@application/styles/globals.scss"

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
