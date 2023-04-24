import Image from "next/image"
import Link from "next/link"
import LogoImg from "@entities/navigation/assets/images/logo.svg"

type AppLogoProps = { className?: string }

const AppLogo: React.FC<AppLogoProps> = ({ className }) => {
	return (
		<Link href="/" className={`${className} block`}>
			<Image
				src={LogoImg}
				alt="Logo of Online cinema"
				width={247}
				height={34}
				draggable={false}
				priority
			/>
		</Link>
	)
}

export { AppLogo }
