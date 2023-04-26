import ActionsCell, { ActionsCellProps } from "./ActionsCell"
import tw, { css, styled } from "twin.macro"
import { CircularLoader } from "@ui/CircularLoader"

type AdminTableProps = {
	cellCount: number
	columnTitles: string[]
	columnsWidth?: string[]
	data: any[][]
	actions: ActionsCellProps[]
	placeholderText?: string
	isLoading?: boolean
}

const AdminTable: React.FC<AdminTableProps> = ({
	cellCount,
	data,
	columnTitles,
	columnsWidth,
	placeholderText,
	isLoading,
	actions,
}) => {
	return (
		<table className="block">
			<TableHead>
				{Array.from({ length: cellCount }).map((_, i) => (
					<ColumnTitle
						key={columnTitles[i]}
						className={columnsWidth ? columnsWidth[i] : "w-1/4"}
					>
						{columnTitles[i]}
					</ColumnTitle>
				))}
				<ColumnTitle>Actions</ColumnTitle>
			</TableHead>
			<tbody className="block">
				{isLoading ? (
					<CircularLoader />
				) : data.length > 0 ? (
					data.map((_, i) => (
						<Row key={data[i][0]}>
							{Array.from({ length: cellCount }).map((_, j) => (
								<Cell
									key={data[i][j]}
									className={
										columnsWidth ? columnsWidth[j] : "w-1/4"
									}
								>
									{String(data[i][j])}
								</Cell>
							))}
							<ActionsCell {...actions[i]} />
						</Row>
					))
				) : (
					<EmptyTablePlaceholder>
						{placeholderText || "No data."}
					</EmptyTablePlaceholder>
				)}
			</tbody>
		</table>
	)
}

const RowHeadCommon = `mt-4 block flex items-center justify-between gap-4 rounded-lg bg-opacity-20 px-5 text-left transition-colors`

const TableHead = tw.thead`
    ${RowHeadCommon} mt-8 bg-primary shadow-lg hover:bg-opacity-30`

const Row = tw.tr`
	${RowHeadCommon} bg-gray-700 hover:bg-opacity-50`

const tdThCommon = `
	block py-3 text-white text-sm sm:text-base last:justify-end last:text-right text-opacity-80
`
export const Cell = tw.td`${tdThCommon}`

const ColumnTitle = tw.th`${tdThCommon} py-2.5 font-semibold text-opacity-90`

const EmptyTablePlaceholder = tw.tr`
    py-3 pt-6 block text-center text-lg text-white text-opacity-60`

export { AdminTable }
