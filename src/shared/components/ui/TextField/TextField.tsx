import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import tw, { css, styled } from "twin.macro"
import useLabelState from "./useLabelState"

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string
	error?: FieldError
}

type InputRefCb = (instance: HTMLInputElement) => void

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ label, error, type = "text", className, ...rest }, ref) => {
		const { labelRaised, setRef } = useLabelState()

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

const Field = tw.div`
	relative w-full border-b border-gray-600 transition-colors focus-within:border-primary text-left
`

const Label = tw.label`block`

const LabelText = styled.span<{ raised: boolean }>(({ raised }) => [
	tw`block text-xs uppercase text-gray-600 transform translate-y-5 transition-transform`,
	raised && tw`translate-y-0`,
])

const Input = tw.input`
	m-0 w-full bg-transparent px-0 text-gray-500 outline-border-none focus:ring-0
`
const Error = tw.span`mt-2 block w-full text-left text-sm text-primary`

export default TextField
