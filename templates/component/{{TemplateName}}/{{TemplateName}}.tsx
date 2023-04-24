import {memo} from "react"
import tw, { styled } from "twin.macro"

type {{TemplateName}}Props = {
	className?: string
}

const {{TemplateName}}: React.FC<{{TemplateName}}Props> = ({className}) => {
	return <div className={className}>{{TemplateName}}</div>
}

export default memo({{TemplateName}})
