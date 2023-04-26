import { memo } from "react"
import tw, { styled } from "twin.macro"
import { MaterialIcon, MaterialIconName } from "@entities/icon"
import { WithChildren } from "@shared/types/utility/WithChildren"

const IconButton = tw.button`rounded-full p-2 hover:bg-white hover:bg-opacity-10 transition-colors`

export default memo(IconButton)
