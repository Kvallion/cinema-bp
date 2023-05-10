import Image from "next/image"
import { ChangeEvent } from "react"
import { FieldError } from "react-hook-form"
import tw, { css, styled } from "twin.macro"
import useFileUpload from "@entities/file-upload/hooks/useFileUpload"
import { FieldLabelSkeleton } from "@ui/FieldLabelSkeleton"
import { SkeletonLoader } from "@ui/SkeletonLoader"
import { Error, Field, LabelText } from "@ui/TextField/TextField"

type UploadFieldProps = {
	type: "image" | "video"
	isLoading?: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	folder?: string
	label?: string
	uri?: string
	isImage?: boolean
	error?: FieldError
	className?: string
}

const UploadField: React.FC<UploadFieldProps> = ({
	type,
	isLoading,
	onChange,
	folder,
	label,
	uri,
	isImage = true,
	error,
	className,
}) => {
	const { isUploading, uploadFile } = useFileUpload(type, onChange, folder)
	return (
		<StyledField className={className}>
			<div className="flex flex-col sm:flex-row gap-y-5 gap-x-2">
				<label className="block mr-6">
					<LabelText raised>{label}</LabelText>
					<FileInput
						type="file"
						onChange={uploadFile}
						disabled={isLoading || isUploading}
					/>
					{error && <Error>{error.message}</Error>}
				</label>

				{uri && isImage && (
					<PreviewRatio>
						<Preview src={uri} alt="selected image" fill />
					</PreviewRatio>
				)}
			</div>
		</StyledField>
	)
}

const UploadFieldSkeleton = () => (
	<div className="flex items-start">
		<div>
			<FieldLabelSkeleton className="mb-4" />
		</div>
		<PreviewSkeleton />
	</div>
)

const StyledField = tw(Field)`border-b-0`

const PreviewRatio = styled.div(() => [
	tw`relative w-full pb-full sm:w-24 sm:h-24 sm:pb-0 rounded-layout shrink-0 overflow-hidden`,
])

const Preview = tw(Image)`full-screen rounded-md image-like-bg`
Preview.defaultProps = { draggable: false }

const PreviewSkeleton = tw(SkeletonLoader)`h-24 w-24 rounded-md`

const FileInput = tw.input`mt-4 block w-full text-sm text-gray-600 opacity-70 transition-opacity file:mr-4 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white`

export default UploadField
