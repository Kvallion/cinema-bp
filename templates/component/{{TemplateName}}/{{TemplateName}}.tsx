import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import s from "./{{TemplateName}}.module.scss"

type {{TemplateName}}Props = WithClassesInjectionProps & {}

const {{TemplateName}}: React.FC<{{TemplateName}}Props> = ({cn}) => {
	return <div className={cn()}>{{TemplateName}}</div>
}

export default withClasses({{TemplateName}})  
