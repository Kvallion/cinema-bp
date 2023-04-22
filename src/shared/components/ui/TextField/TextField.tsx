import { InputHTMLAttributes, MutableRefObject, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import tw, { styled } from "twin.macro"

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string
	labelLifted?: boolean
	error?: FieldError
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ label, labelLifted, error, type = "text", className, ...rest }, ref) => {
		return (
			<Wrapper className={className}>
				<Field>
					<Label>
						<LabelText lifted={labelLifted}>{label}</LabelText>
						<Input ref={ref} type={type} {...rest} />
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

type LabelTextProps = { lifted?: boolean }
const LabelText = styled.span<LabelTextProps>(({ lifted }) => [
	tw`block text-xs uppercase text-gray-600 transform translate-y-5 transition-transform`,
	lifted && tw`translate-y-0`,
])

const Input = tw.input`
	m-0 w-full bg-transparent px-0 text-gray-500 outline-border-none focus:ring-0
`
const Error = tw.span`mt-2 block w-full text-left text-sm text-primary`

export default TextField
