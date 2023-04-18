import { bgColor } from "./../../shared/consts/colors"
import { createTheme } from "@mui/material/styles"

export const appTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			contrastText: "#fff",
			dark: "#E30B13",
			main: "#E30B13",
		},
	},
	typography: {
		fontFamily: [
			"Outfit",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	components: {
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					bgColor: "transparent",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				containedPrimary: {
					// bgColor: "palette.primary.main",
				},
			},
		},
	},
})
