import { useEffect, useState } from "react";


function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height,
	}
}
const defaultValue = {
		width: 0,
		height: 0,
	}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(defaultValue)

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return windowDimensions
}