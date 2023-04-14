import s from "./Navigation.module.scss"

import { NavigationLogo } from "@entities/logo"
import withClasses, { WithClassesInjectionProps } from "@shared/hoc/withClasses"
import { MenuContainer } from "../MenuContainer"

type NavigationProps = WithClassesInjectionProps & {}

const Navigation: React.FC<NavigationProps> = ({ cn }) => {
	return (
		<aside className={cn(s.navigation)}>
			<NavigationLogo />
			<MenuContainer />
		</aside>
	)
}

export default withClasses(Navigation)
