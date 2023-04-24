import { bindActionCreators, createSlice } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useAppDispatch } from "@hooks/redux"
import { RootState } from "@app/store"

interface LayoutSliceState {
	showSlidingPanel: boolean
}

const initialState: LayoutSliceState = {
	showSlidingPanel: false,
}

export const LayoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		hideSlidingPanel: state => {
			state.showSlidingPanel = false
		},
		openSlidingPanel: state => {
			state.showSlidingPanel = true
		},
	},
})

export const { hideSlidingPanel, openSlidingPanel } = LayoutSlice.actions

export function useLayoutActions() {
	const dispatch = useAppDispatch()
	return useMemo(
		() => bindActionCreators(LayoutSlice.actions, dispatch),
		[dispatch]
	)
}

export const selectShowPanel = (state: RootState) =>
	state.layout.showSlidingPanel
