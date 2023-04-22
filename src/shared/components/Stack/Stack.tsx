import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import { WithChildren } from "@shared/types/utility/WithChildren"
import tw, { css, styled } from "twin.macro"

type StackProps = {
	spacing: number
	className?: string
}

const Stack: React.FC<StackProps & WithChildren> = ({
	spacing,
	children,
	className,
}) => {
	return (
		<StackContainer spacing={spacing} className={className}>
			{children}
		</StackContainer>
	)
}

const StackContainer = styled.div<StackProps>(({ spacing }) => [
	tw`flex flex-col`,
	css`
		gap: ${`${spacing / 4}rem`};
	`,
])

export default Stack
