import { SearchField, SearchFieldProps } from "../SearchField"
import { SearchPopupList } from "../SearchPopupList"
import { SearchPopupListProps } from "../SearchPopupList/SearchPopupList"
import tw, { styled } from "twin.macro"

type SearchWithPopupProps<T> = SearchFieldProps &
	Omit<SearchPopupListProps<T>, "open">

function SearchWithPopup<T>(props: SearchWithPopupProps<T>) {
	return (
		<div className={`relative ${props.className}`}>
			<SearchField
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
			<SearchPopupList
				open={!!props.value}
				data={props.data}
				getId={props.getId}
				getLink={props.getLink}
				getLabel={props.getLabel}
				getImage={props.getImage}
			/>
		</div>
	)
}

export default SearchWithPopup
