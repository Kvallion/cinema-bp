import { useEffect, useState } from "react"
import { Actor } from "../model/actor.types"

export function usePopularActors(actors?: Actor[]) {
	const [popularActors, setPopularActors] = useState(actors || [])
	useEffect(() => {
		if (actors) {
			const _actors = [...actors]
			_actors.sort((a1, a2) => (a1.countMovies > a2.countMovies ? -1 : 1))
			setPopularActors(_actors.slice(0, 7))
		}
	}, [actors])
	return popularActors
}
