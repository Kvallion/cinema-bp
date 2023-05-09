import { IconSelectOption } from "./IconSelect/IconSelect"
import { Children, FC } from "react"
import { GroupBase, MenuListProps } from "react-select"
import { FixedSizeList as List } from "react-window"
import tw from "twin.macro"
import { MaterialIcon, MaterialIconName } from "@entities/icon"

const height = 40

const OptionList: FC<
	MenuListProps<IconSelectOption, false, GroupBase<IconSelectOption>>
> = ({ options, getValue, maxHeight, children }) => {
	const [value] = getValue()
	const initialOffset = options.indexOf(value) * height
	const childrenArr = Children.toArray(children)
	return (
		<div onClick={e => console.log("click")}>
			<List
				width="100%"
				height={maxHeight}
				itemCount={childrenArr.length}
				itemSize={height}
				initialScrollOffset={initialOffset}
			>
				{({ index, style }) => (
					<div style={style}>{childrenArr[index]}</div>
				)}
			</List>
		</div>
	)
}

const Icon = tw(MaterialIcon)`p-1 text-3xl`

export default OptionList
