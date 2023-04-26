import { useDebounce } from "use-debounce"
import { useInput } from "./useInput"

export default function useDeboucedInput(delay: number = 500) {
	const { value, input } = useInput()
	const [debouncedValue] = useDebounce(value, delay)
	return { debouncedValue, input }
}
