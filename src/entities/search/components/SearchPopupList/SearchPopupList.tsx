import Image from "next/image"
import Link from "next/link"
import tw, { css, styled } from "twin.macro"

export type SearchPopupListProps<T> = {
	data: T[]
	open: boolean
	getId: (d: T) => any
	getLink: (d: T) => string
	getLabel: (d: T) => string
	getImage?: (d: T) => string
	className?: string
	emptyListPlaceholder?: string
}

function SearchPopupList<T>({
	open,
	data,
	getImage,
	getLabel,
	getId,
	getLink,
	emptyListPlaceholder = "Nothing found",
	className,
}: SearchPopupListProps<T>) {
	return (
		<List open={open} className={className}>
			{!data.length ? (
				<NoOptionsPlaceholder>
					{emptyListPlaceholder}
				</NoOptionsPlaceholder>
			) : (
				data.map(d => (
					<Link
						key={getId(d)}
						href={getLink(d)}
						className="my-3 block"
					>
						<OptionCard>
							{getImage && (
								<OptionImage
									src={getImage!(d)}
									alt={getLabel(d) + "image"}
								/>
							)}
							<OptionLabel>{getLabel(d)}</OptionLabel>
						</OptionCard>
					</Link>
				))
			)}
		</List>
	)
}

type ListProps = { open: boolean }
const List = styled.ul<ListProps>(({ open }) => [
	tw`absolute z-10 w-full animate-fade rounded-layout border border-gray-700 bg-gray-800`,
	!open && tw`hidden`,
	css`
		*:not(:focus-within) > & {
			${tw`hidden`}
		}
		*:focus-within > & {
			${open && tw`block`}
		}
	`,
])
const OptionCard = tw.div`relative flex items-center px-4`

const OptionImage = styled(Image)(
	() => tw`rounded-image object-cover object-top`
)
OptionImage.defaultProps = { height: 50, width: 50, draggable: false }

const OptionLabel = tw.span`ml-3 truncate text-white`

const NoOptionsPlaceholder = tw.div`my-4 text-center text-gray-600`

export default SearchPopupList
