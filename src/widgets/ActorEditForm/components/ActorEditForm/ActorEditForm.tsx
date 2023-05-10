import dynamic from "next/dynamic"
import { memo } from "react"
import { Controller } from "react-hook-form"
import tw from "twin.macro"
import useLogger from "@hooks/useLogger"
import useActorEditForm from "@widgets/ActorEditForm/hooks/useActorEditForm"
import {
	photoExtension,
	requiredName,
	requiredSlug,
} from "@widgets/ActorEditForm/consts/ActorEditFormMsgs"
import IconSelectSkeleton from "@features/IconSelect/components/IconSelectSkeleton"
import { TextEditorSkeleton } from "@features/TextEditor/components/TextEditorSkeleton"
import { TextField } from "@ui/TextField"
import { EditFormActions } from "@features/EditFormActions"
import { SlugField } from "@features/SlugField"
import { UploadField } from "@entities/file-upload"

const LazyTextEditor = dynamic(
	async () => (await import("@features/TextEditor")).TextEditor,
	{ ssr: false, loading: () => <TextEditorSkeleton /> }
)

const LazyIconSelect = dynamic(
	async () => (await import("@features/IconSelect")).IconSelect,
	{ ssr: false, loading: () => <IconSelectSkeleton /> }
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
	const { name, photo } = values
	useLogger("photo", photo)

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
			</Grid>

			<div className="w-full xs:w-3/5">
				<Controller
					control={control}
					name="photo"
					rules={{
						required: "Photo is required",
						pattern: {
							value: /.+\.(jpg|jpeg|png|webp)$/,
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
						/>
					)}
				/>
			</div>

			{/* <Controller
				control={control}
				name="description"
				defaultValue=""
				rules={{
					required: false,
				}}
				render={({
					field: { value, onChange },
					fieldState: { error },
				}) => (
					<LazyTextEditor
						className="mb-8"
						value={value}
						onChange={onChange}
						error={error}
						label="Description"
						isLoading={isLoading}
					/>
				)}
			/> */}

			<EditFormActions submitDisabled={isLoading} className="mt-8" />
		</form>
	)
}

const Grid = tw.div`grid grid-cols-2 gap-8`

export default memo(ActorEditForm)
