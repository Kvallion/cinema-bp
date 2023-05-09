import cn from "clsx"
import { compare } from "fast-string-compare"
import { useMemo } from "react"
import { ControllerRenderProps } from "react-hook-form"
import ReactSelect, {
	MultiValue,
	OnChangeValue,
	SingleValue,
} from "react-select"
import { Options } from "react-select"
import makeAnimated from "react-select/animated"
import s from "./react-select.module.scss"
import { Error, LabelText, TextFieldProps } from "@ui/TextField/TextField"

export type SelectOption = {
	value: string
	label: string
}

export type SelectProps = TextFieldProps & {
	options: Options<SelectOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	className?: string
}

const Select: React.FC<SelectProps> = ({
	field,
	isMulti = false,
	options,
	label,
	isLoading,
	error,
	className,
}) => {
	const values = useMemo(() => {
		if (!field.value) return isMulti ? [] : ""
		if (isMulti) {
			return (field.value as string[]).map(value =>
				options.find(option => compare(value, option.value) === 0)
			)
		} else {
			return options.find(
				option => compare(option.value, field.value) === 0
			)
		}
	}, [field.value, options, isMulti])

	function onChange(
		newValue: OnChangeValue<string | SelectOption | undefined, boolean>
	) {
		field.onChange(
			isMulti
				? (newValue as MultiValue<SelectOption>).map(item => item.value)
				: (newValue as SingleValue<SelectOption>)!.value
		)
	}

	return (
		<div className={cn(className, "w-full")}>
			<label>
				<LabelText raised>{label}</LabelText>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={values}
					isMulti={isMulti}
					onChange={onChange}
					components={makeAnimated()}
					isLoading={isLoading}
				/>
			</label>
			{error && <Error>{error.message}</Error>}
		</div>
	)
}

export { Select }
