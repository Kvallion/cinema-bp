import { toastr } from "react-redux-toastr"
import {
	useGetFavoritesQuery,
	useToggleFavoritesMutation,
} from "@entities/user"
import { toastError } from "@shared/lib/helper/toasts/toastError"
import { _ } from "@shared/consts/utility"
import { useCurrentUser } from "@features/authorization"

export default function useFavorites() {
	const user = useCurrentUser()

	const { data: favoriteMovies, isFetching } = useGetFavoritesQuery(_, {
		skip: !user,
	})

	const [toggleFavorite] = useToggleFavoritesMutation()

	return {
		isFetching,
		favoriteMovies,
		toggleFavorite,
	}
}
