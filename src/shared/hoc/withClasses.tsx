import React from "react"
import classNames from "classnames"

export interface WithClassesInjectionProps {
	cn: typeof classNames
}

export interface WithClassesProps extends WithClassesInjectionProps {
	classes?: string[]
}

export function partialCn(_classes: string[]) {
	return (...classes: string[]) => classNames(..._classes, ...classes)
}

function withClasses<T extends WithClassesProps = WithClassesProps>(
	Component: React.ComponentType<T>
) {
	const ComponentWithClasses = ({ classes = [], ...props }) => {
		return <Component {...(props as T)} cn={partialCn(classes)} />
	}
	const displayName = Component.displayName || Component.name || "Component"
	ComponentWithClasses.displayName = `withClasses(${displayName})`

	return ComponentWithClasses
}

export default withClasses
