import { AppDispatch, RootState } from "@app/store"
import { ActionCreator, bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
