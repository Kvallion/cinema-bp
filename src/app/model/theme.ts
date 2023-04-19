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
		MuiListItem: {
			styleOverrides: {
				root: {
					// padding: "0px",
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					padding: "0px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					":last-child": {
						paddingBottom: "0px",
					},
				},
			},
		},
		MuiCard: {
			defaultProps: {
				classes: {
					root: "no-bg",
				},
			},
		},
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					backgroundColor: "#101215",
					borderRadius: "0.8rem",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				containedPrimary: {
					// bgColor: "palette.primary.main",
					borderRadius: "0.65rem",
					padding: "0.625rem 2.5rem",
				},
			},
		},
		MuiTextField: {
			defaultProps: {
				variant: "standard",
			},
		},
	},
})
