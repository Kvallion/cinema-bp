import Link from "next/link"
import tw from "twin.macro"

type AuthButtonProps = {
	originUrl: string
}

const AuthButton: React.FC<AuthButtonProps> = ({ originUrl }) => {
	return <Button href={`/auth/redirect=${originUrl}`}>Sign in</Button>
}

const Button = tw(Link)``

export default AuthButton
