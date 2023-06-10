import { memo } from "react"
import tw, { css, styled } from "twin.macro"

type InfoProps = {
	titles: string[]
	values: any[]
}

const Info: React.FC<InfoProps> = ({ titles, values }) => {
	return (
		<Grid>
			{titles.map((t, i) => (
				<>
					<Title>{t}</Title>
					<Value>
						{Array.isArray(values[i])
							? values[i].join(", ")
							: values[i]}
					</Value>
				</>
			))}
		</Grid>
	)
}

const Grid = styled.div(() => [
	tw`grid gap-x-8`,
	css`
		& {
			grid-template-columns: auto 1fr;
		}
	`,
])
const Title = tw.span`text-white text-opacity-70`
const Value = tw.span`text-white`

export default memo(Info)
