import { TextEditorSkeleton } from "../TextEditorSkeleton"
import cn from "clsx"
import { EditorProps } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import tw from "twin.macro"
import useTextEditor from "@features/TextEditor/hooks/useTextEditor"
import { toolbarConfig } from "@features/TextEditor/config/TextEditorConfig"
import s from "./TextEditor.module.scss"
import { Error, Field, TextFieldProps } from "@ui/TextField/TextField"

export type TextEditorProps = TextFieldProps &
	Omit<EditorProps, "editorState"> & {
		onChange: (...event: any[]) => void
		value: string
	}

const TextEditor: React.FC<TextEditorProps> = ({
	isLoading,
	value,
	onChange,
	label,
	error,
	className,
}) => {
	const { editorState, onEditorStateChange } = useTextEditor(value, onChange)

	if (isLoading) return <TextEditorSkeleton />

	return (
		<TextEditorField className={className}>
			<label>
				<Placeholder>{label}</Placeholder>
				<div className={s.wrapper}>
					<Editor
						toolbarClassName={s.toolbar}
						editorClassName={s.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={toolbarConfig}
					/>
				</div>
				{error && <Error>{error.message}</Error>}
			</label>
		</TextEditorField>
	)
}

const TextEditorField = tw(Field)`z-0 border-0 border-b-0 animate-fade`

const Placeholder = tw.span`block text-xs uppercase text-gray-600`

export default TextEditor
