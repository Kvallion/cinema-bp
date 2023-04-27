import { FC, InputHTMLAttributes } from "react"
import { ChangeEvent } from "react"
import tw, { css, styled } from "twin.macro"
import { MaterialIcon } from "@entities/icon"

export type SearchFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	placeholder?: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => any
	searchOnEnter?: boolean
}

const SearchField: FC<SearchFieldProps> = ({
	placeholder = "Search...",
	value,
	onChange,
	searchOnEnter = false,
	className,
	...props
}) => {
	return (
		<Wrapper className={className}>
			<SearchIcon />
			<Input
				{...props}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	)
}

const SearchIcon = styled(MaterialIcon)(({}) => [
	tw`mr-2 fill-gray-600 text-3xl transition-colors`,
])
SearchIcon.defaultProps = { name: "MdSearch" }

const Input = tw.input`
	block w-full border-none bg-transparent p-0 text-white outline-none placeholder:text-gray-600 focus:ring-0
`

const Wrapper = styled.div(() => [
	tw`flex items-center rounded-3xl border border-gray-700 px-3 py-2 transition-colors`,
	css`
		&:focus-within {
			${tw`border-gray-600`}
		}
		&:focus-within ${SearchIcon} {
			${tw`fill-gray-600`}
		}
	`,
])

export { SearchField }
