import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
import { YbLinkPatterns } from "../consts/ybLinkPatterns"

export default function useYbLink(link: string) {
	const [debouncedLink] = useDebounce(link, 600)
	const [id, setId] = useState("")
	useEffect(() => {
		for (let pattern of YbLinkPatterns) {
			const found = debouncedLink.match(pattern)
			if (found && found[1]) {
				setId(found[1])
				return
			}
		}
		setId("")
	}, [debouncedLink])
	return id
}
