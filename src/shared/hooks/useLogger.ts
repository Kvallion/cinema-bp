import { useEffect } from "react"

export default function useLogger(name: string, value: any) {
	useEffect(() => {
		console.log(name, value)
	}, [value])
}
