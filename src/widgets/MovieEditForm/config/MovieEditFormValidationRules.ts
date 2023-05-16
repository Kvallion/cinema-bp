import { MovieEditFormState } from "../components/MovieEditForm/MovieEditForm.types"
import { RegisterOptions } from "react-hook-form"
import {
	photoExtension,
	requiredBigPoster,
	requiredPoster,
	requiredVideo,
	videoExtension,
} from "../consts/MovieEditFormMsgs"

export const posterRules: RegisterOptions<MovieEditFormState, "poster"> = {
	required: requiredPoster,
	pattern: {
		value: /.+\.(jpg|jpeg|png|webp)$/,
		message: photoExtension,
	},
}

export const bigPosterRules: RegisterOptions<MovieEditFormState, "bigPoster"> =
	{
		required: requiredBigPoster,
		pattern: {
			value: /.+\.(jpg|jpeg|png|webp)$/,
			message: photoExtension,
		},
	}

export const videoRules: RegisterOptions<MovieEditFormState, "videoUrl"> = {
	pattern: {
		value: /.+\.(mp4|avi|wmv|webm|mov|avchd)$/,
		message: videoExtension,
	},
}
