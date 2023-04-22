import { getMovieRoute } from "@shared/routes/routes"
import { useState } from "react"
import { useDebounce } from "use-debounce"
import { useInput } from "@hooks/useInput"
import { SearchWithPopup } from "@entities/search/components/SearchWithPopup"
import { useGetAllMoviesQuery } from "@entities/movie"
import { SearchField } from "@entities/search"

type MovieSearchProps = {
	className?: string
}

const MovieSearch: React.FC<MovieSearchProps> = ({ className }) => {
	const { value: searchTerm, input } = useInput()
	const [debouncedsearchTerm] = useDebounce(searchTerm, 500)
	const { data: movies, isFetching } =
		useGetAllMoviesQuery(debouncedsearchTerm)

	return (
		<SearchWithPopup
			placeholder="Search movies..."
			{...input}
			data={movies || []}
			getId={m => m._id}
			getLink={m => getMovieRoute(m.slug)}
			getLabel={m => m.title}
			getImage={m => m.poster}
			className="mb-4"
		/>
	)
}

export { MovieSearch }
