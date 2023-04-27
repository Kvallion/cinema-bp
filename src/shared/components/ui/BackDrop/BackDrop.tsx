import tw, { styled } from "twin.macro"

type BackDropProps = {
	show: boolean
	hide: () => any
}

const BackDrop: React.FC<BackDropProps> = ({ show, hide }) => {
	return <BackDrop_ show={show} onClick={hide} />
}

const BackDrop_ = styled.div<{ show: boolean }>(({ show }) => [
	tw`full-screen bg-black opacity-70 fixed z-5`,
	!show && tw`hidden`,
])

export default BackDrop
