import { useEffect, useState } from "react"

export default function useClientCheck() {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		if (!isClient) {
			setIsClient(true)
		}
	}, [isClient])

	return { isClient }
}
