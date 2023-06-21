import { useState } from "react"
import { memo } from "react"
import { useFormState } from "react-hook-form"
import tw, { css, styled } from "twin.macro"
import { MaterialIcon } from "@entities/icon"
import { WithChildren } from "@shared/types/utility/WithChildren"

type TextLimiterProps = WithChildren & {}

const TextLimiter: React.FC<TextLimiterProps> = ({ children }) => {
	const [open, setOpen] = useState(false)
	return (
		<Container open={open}>
			{children}
			<ReadMoreBtn onClick={() => setOpen(prev => !prev)}>
				{!open ? (
					<>
						Read more
						<Arrow name="MdExpandMore" />
					</>
				) : (
					<>
						Close
						<Arrow name="MdKeyboardArrowUp" />
					</>
				)}
			</ReadMoreBtn>
		</Container>
	)
}

const Container = styled.div<{ open: boolean }>(({ open }) => [
	tw`relative max-h-80 overflow-y-hidden text-ellipsis pb-16`,
	css`
		& {
			transition: max-height 1s ease-in-out;
		}
	`,
	open && tw`max-h-inf`,
])

const ReadMoreBtn = tw.button`block absolute left-0 right-0 bottom-0 border-gray-800 bg-gray-950 py-4 flex justify-center items-center`
const Arrow = tw(MaterialIcon)`text-3xl`

export default memo(TextLimiter)
