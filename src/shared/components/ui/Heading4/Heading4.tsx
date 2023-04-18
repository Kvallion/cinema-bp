import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import s from "./Heading4.module.scss"

type Heading4Props = WithClassesInjectionProps & {
	text: string
}

const Heading4: React.FC<Heading4Props> = ({ text, cn }) => {
	return <h4 className={cn(s.heading)}>{text}</h4>
}

export default withClasses(Heading4)
