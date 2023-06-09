import { MovieEditFormState } from "../components/MovieEditForm/MovieEditForm.types"
import { RegisterOptions } from "react-hook-form"
import {
	photoExtension,
	requiredBigPoster,
	requiredPoster,
	ybVideoLink,
} from "../consts/MovieEditFormMsgs"
import { commonPattern } from "@entities/YoutubeLinkField/consts/ybLinkPatterns"

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
		value: commonPattern,
		message: ybVideoLink,
	},
}
