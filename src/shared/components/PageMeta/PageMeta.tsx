import Head from "next/head"
import { useRouter } from "next/router"
import { siteName } from "@shared/consts/app-info"
import logoImage from "@entities/navigation/assets/images/logo.svg"

type PageMetaProps = {
	title: string
	description?: string
	image?: string
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, image }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	title = `${title} | ${siteName}`
	return (
		<>
			<Head>
				<title itemProp="headline">{title}</title>
				{description ? (
					<>
						<meta
							name="description"
							itemProp="description"
							content={description}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locate" content="en" />
						<meta property="og:title" content={title} />
						<meta property="og:url" content={currentUrl} />
						<meta
							property="og:image"
							content={image || logoImage}
						/>
						<meta property="og:site_name" content={siteName} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	)
}

export default PageMeta
