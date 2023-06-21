import dynamic from "next/dynamic"
import { memo } from "react"
import { Controller } from "react-hook-form"
import tw from "twin.macro"
import useActorEditForm from "@widgets/ActorEditForm/hooks/useActorEditForm"
import {
	photoExtension,
	requiredBirthDate,
	requiredBirthPlace,
	requiredName,
	requiredPeriod,
	requiredSlug,
} from "@widgets/ActorEditForm/consts/ActorEditFormMsgs"
import { dateRegex } from "@widgets/ActorEditForm/consts/regex/date"
import { TextEditorSkeleton } from "@features/TextEditor/components/TextEditorSkeleton"
import { TextField } from "@ui/TextField"
import { EditFormActions } from "@features/EditFormActions"
import { SlugField } from "@features/SlugField"
import { UploadField } from "@entities/file-upload"

const LazyTextEditor = dynamic(
	async () => (await import("@features/TextEditor")).TextEditor,
	{ ssr: false, loading: () => <TextEditorSkeleton /> }
)

type ActorEditFormProps = { className?: string }

const ActorEditForm: React.FC<ActorEditFormProps> = ({ className }) => {
	const {
		isLoading,
		register,
		control,
		errors,
		onSubmit,
		values,
		setSlug,
		slugDirty,
	} = useActorEditForm()
	const { name } = values

	return (
		<form onSubmit={onSubmit} className={className}>
			<Grid className="mb-8">
				<TextField
					label="Full name"
					{...register("name", { required: requiredName })}
					error={errors.name}
					isLoading={isLoading}
				/>
				<SlugField
					label="Slug"
					{...register("slug", { required: requiredSlug })}
					error={errors.slug}
					initValue={name}
					setSlug={setSlug}
					slugDirty={!!slugDirty}
					isLoading={isLoading}
				/>

				<TextField
					label="Birth Date"
					{...register("birthDate", {
						required: requiredBirthDate,
						pattern: {
							value: dateRegex,
							message: "Enter correct date in format dd.mm.yyyy",
						},
					})}
					error={errors.birthDate}
					isLoading={isLoading}
				/>
				<TextField
					label="Place of birth"
					{...register("birthPlace", {
						required: requiredBirthPlace,
					})}
					error={errors.birthPlace}
					isLoading={isLoading}
				/>

				<TextField
					label="Career Period"
					{...register("careerPeriod", { required: requiredPeriod })}
					error={errors.careerPeriod}
					isLoading={isLoading}
				/>
			</Grid>

			<Grid tw="grid-cols-1 sm:grid-cols-2">
				<Controller
					control={control}
					name="photo"
					rules={{
						required: "Photo is required",
						pattern: {
							value: /.+\.(jpg|jpeg|jfif|png|webp)$/,
							message: photoExtension,
						},
					}}
					render={({
						field: { value, onChange },
						fieldState: { error },
					}) => (
						<UploadField
							label="Photo"
							type="image"
							onChange={onChange}
							uri={value}
							folder="actors"
							error={error}
							isLoading={isLoading}
						/>
					)}
				/>
			</Grid>

			<Controller
				control={control}
				name="miniBio"
				defaultValue=""
				rules={{
					required: false,
				}}
				render={({
					field: { value, onChange },
					fieldState: { error },
				}) => (
					<LazyTextEditor
						className="my-8"
						value={value}
						onChange={onChange}
						error={error}
						label="Mini Biography"
						isLoading={isLoading}
					/>
				)}
			/>

			<EditFormActions submitDisabled={isLoading} className="mt-8" />
		</form>
	)
}

const Grid = tw.div`grid grid-cols-2 gap-8`

export default memo(ActorEditForm)
