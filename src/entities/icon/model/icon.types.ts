import * as MaterialIcons from "react-icons/md"

export type MaterialIconName = keyof typeof MaterialIcons

export const iconNames = Object.keys(MaterialIcons) as MaterialIconName[]
