import Link from "next/link"
import { Fragment } from "react"
import tw from "twin.macro"

type DetailProps = {
	name: string
	links: {
		title: string
		link: string
	}[]
	className?: string
}

const Detail: React.FC<DetailProps> = ({ name, links, className }) => {
	return (
		<StyledItem className={className}>
			<Name>{name}</Name>
			<Links>
				{links.map(({ link, title }, i) => (
					<Fragment key={link}>
						<Link href={link} className="text-link">
							{title}
						</Link>
						{i !== links.length - 1 ? ", " : "..."}
					</Fragment>
				))}
			</Links>
		</StyledItem>
	)
}

const StyledItem = tw.li`mb-1 flex flex-col xs:flex-row  items-start text-sm sm:text-base`
const Name = tw.span`mr-2 text-white text-opacity-60`
const Links = tw.span`text-white text-opacity-90`

export default Detail
