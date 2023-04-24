import tw, { styled } from "twin.macro"
import { MaterialIcon } from "@entities/icon"

type MenuButtonProps = { onClick?: () => any }

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
	return (
		<Button onClick={onClick}>
			<MenuIcon />
		</Button>
	)
}

const Button = tw.button`p-2.5 rounded-lg border border-gray-800 bg-gray-950`

const MenuIcon = styled(MaterialIcon)(() => tw`text-xl`)
MenuIcon.defaultProps = { name: "MdMenu" }

export { MenuButton }
