import { useState, useCallback, ChangeEvent } from "react"

export function useInput() {
	const [value, setValue] = useState("")

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}, [])

	return { value, input: { value, onChange } }
}
