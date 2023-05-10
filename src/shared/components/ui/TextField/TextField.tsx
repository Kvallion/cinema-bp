import cn from "clsx"
import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import tw, { css, styled } from "twin.macro"
import useLabelState from "./useLabelState"
import { SkeletonLoader } from "@ui/SkeletonLoader"

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string
	error?: FieldError
	isLoading?: boolean
}

type InputRefCb = (instance: HTMLInputElement) => void

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ label, error, type = "text", className, isLoading, ...rest }, ref) => {
		const { labelRaised, setRef } = useLabelState()

		if (isLoading)
			return <SkeletonLoader className={cn("w-full h-10", className)} />

		return (
			<Wrapper className={className}>
				<Field>
					<Label>
						<LabelText raised={labelRaised}>{label}</LabelText>
						<Input
							ref={el => {
								setRef(el)
								;(ref as InputRefCb)(el!)
							}}
							type={type}
							{...rest}
						/>
					</Label>
				</Field>
				{error && <Error>{error.message}</Error>}
			</Wrapper>
		)
	}
)
TextField.displayName = "TextField"

const Wrapper = tw.div`w-full`

export const Field = tw.div`
	relative w-full border-b border-gray-600 transition-colors focus-within:border-primary text-left
`

const Label = tw.label`block`

export const LabelText = styled.span<{ raised: boolean }>(({ raised }) => [
	tw`block text-xs uppercase text-gray-600 transform translate-y-8 transition-transform`,
	raised && tw`translate-y-0`,
])

const Input = tw.input`
	m-0 w-full bg-transparent px-0 py-2 text-gray-500 outline-border-none focus:ring-0
`
export const Error = tw.span`mt-2 block w-full text-left text-sm text-primary`

export { TextField }
