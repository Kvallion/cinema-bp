import withClasses, { WithClassesInjectionProps } from "shared/hoc/withClasses"

type NavigationProps = WithClassesInjectionProps & {}

const Navigation: React.FC<NavigationProps> = ({ cn }) => {
	return <div>Navigation</div>
}

export default withClasses(Navigation)
