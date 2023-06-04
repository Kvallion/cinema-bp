import { useEffect, useState } from "react"
import { useGetRatingByIdQuery, useRateMovieMutation } from "../api/ratingApi"
import { useCurrentUser } from "@features/authorization"

export default function useRating(movieId: string) {
	const user = useCurrentUser()
	const [rated, setRated] = useState(false)

	const { data: rating, isLoading } = useGetRatingByIdQuery(movieId, {
		skip: !user || !movieId,
	})

	useEffect(() => {
		if (rating) {
			setRated(true)
		} else {
			setRated(false)
		}
	}, [rating])

	const [rateMovie] = useRateMovieMutation()

	async function handleClick(nextValue: number) {
		console.log("handleClick")
		rateMovie({ movieId, value: nextValue })
	}

	return {
		user,
		isLoading,
		rating: rating || 0,
		rated,
		handleClick,
	}
}
