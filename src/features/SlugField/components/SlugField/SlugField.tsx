import { forwardRef, useEffect } from "react"
import generateSlug from "@features/SlugField/lib/helper/generateSlug"
import { TextField } from "@ui/TextField"
import { TextFieldProps } from "@ui/TextField/TextField"

type SlugFieldProps = TextFieldProps & {
	slugDirty: boolean
	setSlug: (value: string) => void
	initValue: string
}

const SlugField = forwardRef<HTMLInputElement, SlugFieldProps>(
	({ slugDirty, setSlug, initValue, ...fieldProps }, ref) => {
		useEffect(() => {
			if (!slugDirty) {
				setSlug(generateSlug(initValue))
			}
		}, [initValue])

		return <TextField ref={ref} {...fieldProps} />
	}
)
SlugField.displayName = "SlugField"

export default SlugField
