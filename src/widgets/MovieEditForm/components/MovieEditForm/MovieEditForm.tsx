import dynamic from "next/dynamic"
import { memo, useMemo } from "react"
import { Controller } from "react-hook-form"
import tw from "twin.macro"
import useMovieEditForm from "@widgets/MovieEditForm/hooks/useMovieEditForm"
import {
	photoExtension,
	requiredCountry,
	requiredDescription,
	requiredDuration,
	requiredPoster,
	requiredSlug,
	requiredTitle,
	requiredYear,
} from "@widgets/MovieEditForm/consts/MovieEditFormMsgs"
import {
	bigPosterRules,
	posterRules,
	videoRules,
} from "@widgets/MovieEditForm/config/MovieEditFormValidationRules"
import { TextEditorSkeleton } from "@features/TextEditor/components/TextEditorSkeleton"
import { SelectOption } from "@entities/select/components/Select"
import { Stack } from "@shared/components/Stack"
import { TextField } from "@ui/TextField"
import { EditFormActions } from "@features/EditFormActions"
import { SlugField } from "@features/SlugField"
import { YoutubeLinkField } from "@entities/YoutubeLinkField"
import { UploadField } from "@entities/file-upload"

const LazyTextEditor = dynamic(
	async () => (await import("@features/TextEditor")).TextEditor,
	{ ssr: false, loading: () => <TextEditorSkeleton /> }
)

const LazySelect = dynamic(
	async () => (await import("@entities/select")).Select,
	{ ssr: false }
)

type MovieEditFormProps = { className?: string }

const MovieEditForm: React.FC<MovieEditFormProps> = ({ className }) => {
	const {
		isLoading,
		register,
		control,
		errors,
		onSubmit,
		values,
		genres,
		actors,
		setSlug,
		slugDirty,
	} = useMovieEditForm()
	const genreOptions = useMemo(
		() =>
			genres?.map(
				(g): SelectOption => ({ label: g.name, value: g._id })
			) || [],
		[genres]
	)
	const actorOptions = useMemo(
		() =>
			actors?.map(
				(g): SelectOption => ({ label: g.name, value: g._id })
			) || [],
		[actors]
	)
	console.log("actorOPitons", actorOptions)
	const { title, videoUrl } = values

	return (
		<form onSubmit={onSubmit} className={className}>
			<Stack spacing={8}>
				<Grid2>
					<TextField
						label="Title"
						{...register("title", { required: requiredTitle })}
						error={errors.title}
						isLoading={isLoading}
					/>
					<SlugField
						label="Slug"
						{...register("slug", { required: requiredSlug })}
						error={errors.slug}
						initValue={title}
						setSlug={setSlug}
						slugDirty={!!slugDirty}
						isLoading={isLoading}
					/>
				</Grid2>

				<Grid3>
					<TextField
						label="Country"
						{...register("parameters.country", {
							required: requiredCountry,
						})}
						error={errors.parameters?.country}
						isLoading={isLoading}
					/>
					<TextField
						label="Duration"
						{...register("parameters.duration", {
							required: requiredDuration,
						})}
						error={errors.parameters?.duration}
						isLoading={isLoading}
					/>
					<TextField
						label="Year"
						{...register("parameters.year", {
							required: requiredYear,
						})}
						error={errors.parameters?.year}
						isLoading={isLoading}
					/>
				</Grid3>

				<Grid2 tw="grid-cols-1 sm:grid-cols-2">
					<Controller
						control={control}
						name="genres"
						rules={{
							required: "Genres are required",
						}}
						render={({ field, fieldState: { error } }) => (
							<LazySelect
								label="Genres"
								field={field}
								isMulti
								options={genreOptions}
								isLoading={!genres}
								error={error}
							/>
						)}
					/>
					<Controller
						control={control}
						name="actors"
						rules={{ required: "Actors are required" }}
						render={({ field, fieldState: { error } }) => (
							<LazySelect
								label="Actors"
								field={field}
								isMulti
								options={actorOptions}
								isLoading={!actors}
								error={error}
							/>
						)}
					/>
				</Grid2>

				<Grid2 tw="grid-cols-1 sm:grid-cols-2">
					<Controller
						control={control}
						name="poster"
						rules={posterRules}
						render={({
							field: { value, onChange },
							fieldState: { error },
						}) => (
							<UploadField
								label="Poster"
								type="image"
								onChange={onChange}
								uri={value}
								folder="movies"
								error={error}
								isLoading={isLoading}
							/>
						)}
					/>
					<Controller
						control={control}
						name="bigPoster"
						rules={bigPosterRules}
						render={({
							field: { value, onChange },
							fieldState: { error },
						}) => (
							<UploadField
								label="Large poster"
								type="image"
								onChange={onChange}
								uri={value}
								folder="movies"
								error={error}
								isLoading={isLoading}
							/>
						)}
					/>
					<YoutubeLinkField
						label="Trailer YouTube Link"
						{...register("videoUrl", videoRules)}
						error={errors.videoUrl}
						value={videoUrl}
						isLoading={isLoading}
					/>
				</Grid2>

				<Controller
					control={control}
					name="description"
					rules={{ required: requiredDescription }}
					render={({
						field: { value, onChange },
						fieldState: { error },
					}) => (
						<LazyTextEditor
							value={value}
							onChange={onChange}
							error={error}
							label="Description"
							isLoading={isLoading}
						/>
					)}
				/>

				<EditFormActions submitDisabled={isLoading} />
			</Stack>
		</form>
	)
}

const Grid2 = tw.div`grid grid-cols-2 gap-8`
const Grid3 = tw.div`grid grid-cols-3 gap-8`

export default memo(MovieEditForm)
