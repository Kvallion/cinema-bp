import Image from "next/image"
import Link from "next/link"
import LogoImg from "@entities/logo/assets/images/logo.svg"

type NavigationLogoProps = {}

const NavigationLogo: React.FC<NavigationLogoProps> = () => {
	return (
		<Link href="/" className="mb-10 block px-layout">
			<Image
				src={LogoImg}
				alt="Logo of Online cinema"
				width={247}
				height={34}
				draggable={false}
			/>
		</Link>
	)
}

export { NavigationLogo }
