import {
	enableBodyScroll as enableScroll,
	disableBodyScroll as lockScroll,
} from "body-scroll-lock"
import { useEffect, useRef } from "react"

export default function useDisableScroll<T extends HTMLElement>(
	disable: boolean
) {
	const ref = useRef<T | null>(null)

	useEffect(() => {
		if (disable) {
			lockScroll(ref.current!)
		}

		return () => {
			enableScroll(ref.current!)
		}
	}, [disable])

	return ref
}
