import { RefCallback, useCallback, useEffect, useRef, useState } from "react"

export default function useLabelState() {
	const [labelRaised, setLabelRaised] = useState(false)
	const ref = useRef<HTMLInputElement | null>(null)
	const setRef: RefCallback<HTMLInputElement> = useCallback(node => {
		ref.current = node
	}, [])

	useEffect(() => {
		setLabelRaised(!!ref.current?.value)
	}, [ref.current?.value])

	return { labelRaised, setRef }
}
