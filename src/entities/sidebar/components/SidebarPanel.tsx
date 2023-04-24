import tw, { styled } from "twin.macro"

type SidebarPanelProps = { variant?: "left" | "right" }

const SidebarPanel = styled.aside<SidebarPanelProps>(({ variant = "left" }) => [
	tw` border-gray-800 bg-gray-900 py-layout`,
	variant === "right" ? tw`border-l` : tw`border-l`,
])

export { SidebarPanel }
