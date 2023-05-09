import dynamic from "next/dynamic"
import { memo } from "react"
import { Controller } from "react-hook-form"
import tw from "twin.macro"
import useGenreEditForm from "@widgets/GenreEditForm/hooks/useGenreEditForm"
import {
	requiredName,
	requiredSlug,
} from "@widgets/GenreEditForm/consts/GenreEditFormMsgs"
import IconSelectSkeleton from "@features/IconSelect/components/IconSelectSkeleton"
import { TextEditorSkeleton } from "@features/TextEditor/components/TextEditorSkeleton"
import { TextField } from "@ui/TextField"
import { EditFormActions } from "@features/EditFormActions"
import { SlugField } from "@features/SlugField"

const LazyTextEditor = dynamic(
	async () => (await import("@features/TextEditor")).TextEditor,
	{ ssr: false, loading: () => <TextEditorSkeleton /> }
)

const LazyIconSelect = dynamic(
	async () => (await import("@features/IconSelect")).IconSelect,
	{ ssr: false, loading: () => <IconSelectSkeleton /> }
)

type GenreEditFormProps = { className?: string }

const GenreEditForm: React.FC<GenreEditFormProps> = ({ className }) => {
	const {
		isLoading,
		register,
		control,
		errors,
		onSubmit,
		values,
		setSlug,
		slugDirty,
	} = useGenreEditForm()
	const { name } = values

	return (
		<form onSubmit={onSubmit} className={className}>
			<Grid className="mb-8">
				<TextField
					label="Genre name"
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

				<Controller
					control={control}
					name="icon"
					render={({ field, fieldState: { error } }) => (
						<LazyIconSelect
							label="Icon"
							field={field}
							error={error}
							isLoading={isLoading}
						/>
					)}
				/>
			</Grid>

			<Controller
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
			/>

			<EditFormActions submitDisabled={isLoading} className="mt-8" />
		</form>
	)
}

const Grid = tw.div`grid grid-cols-2 gap-8`

export default memo(GenreEditForm)
