import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import s from "./Heading1.module.scss"

type Heading1Props = WithClassesInjectionProps & { text: string }

const Heading1: React.FC<Heading1Props> = ({ text, cn }) => {
	return <h1 className={cn(s.heading1)}>{text}</h1>
}

export default withClasses(Heading1)
