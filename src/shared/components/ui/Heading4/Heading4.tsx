import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import tw from "twin.macro"

type Heading4Props = WithClassesInjectionProps & {
	text: string
}

const Heading4: React.FC<Heading4Props> = ({ text, cn }) => {
	return <Heading className={cn()}>{text}</Heading>
}

const Heading = tw.h4`
  text-xl font-bold capitalize text-white
`

export default withClasses(Heading4)
