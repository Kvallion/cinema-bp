import IconSelectSkeleton from "../IconSelectSkeleton"
import OptionList from "../OptionList"
import cn from "clsx"
import { memo, useMemo } from "react"
import { ControllerRenderProps } from "react-hook-form"
import Select, { OnChangeValue, SingleValue } from "react-select"
import makeAnimated from "react-select/animated"
import tw from "twin.macro"
import fastIsEqual from "@shared/lib/helper/strings/fastIsEqual"
import { SkeletonLoader } from "@ui/SkeletonLoader"
import { Error, LabelText, TextFieldProps } from "@ui/TextField/TextField"
import { MaterialIconName, iconNames } from "@entities/icon"

export type IconSelectOption = {
	value: MaterialIconName
	label: MaterialIconName
}
type IconSelectProps = TextFieldProps & {
	field: ControllerRenderProps<any, any>
}

const IconSelect: React.FC<IconSelectProps> = ({
	isLoading,
	field,
	className,
	label,
	error,
}) => {
	const options = useMemo(
		() => iconNames.map(n => ({ label: n, value: n })),
		[iconNames]
	)
	const value = useMemo(() => {
		if (!field.value) return null
		return options.find(option => fastIsEqual(option.value, field.value))
	}, [field.value, options])

	const onChange = (
		newValue: OnChangeValue<string | IconSelectOption | null, false>
	) => field.onChange((newValue as SingleValue<IconSelectOption>)!.value)

	if (isLoading) return <IconSelectSkeleton />

	return (
		<div className={cn(className, "w-full")}>
			<label>
				<LabelText raised>{label}</LabelText>
				<Select
					components={{ ...makeAnimated, MenuList: OptionList }}
					value={value}
					onChange={onChange}
					options={options}
					classNamePrefix="custom-select"
				/>
			</label>
			{error && <Error>{error.message}</Error>}
		</div>
	)
}

export default memo(IconSelect)
