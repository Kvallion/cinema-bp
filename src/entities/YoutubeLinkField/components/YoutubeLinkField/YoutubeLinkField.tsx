import Image from "next/image"
import { forwardRef, useEffect, useState } from "react"
import tw from "twin.macro"
import useYbLink from "@entities/YoutubeLinkField/hooks/useYbLink"
import { previewUrl } from "@entities/YoutubeLinkField/consts/ybLinkPatterns"
import { TextField, TextFieldProps } from "@ui/TextField"

type YoutubeLinkFieldProps = TextFieldProps & { value: string }

const YoutubeLinkField: React.FC<YoutubeLinkFieldProps> = forwardRef<
	HTMLInputElement,
	YoutubeLinkFieldProps
>(({ value, ...rest }, ref) => {
	const [src, setSrc] = useState("")

	const videoId = useYbLink(value)

	useEffect(() => {
		console.log(videoId, src)
		if (videoId) {
			setSrc(previewUrl(videoId))
		} else {
			setSrc("")
		}
	}, [videoId])

	return (
		<div>
			<TextField ref={ref} {...rest} />
			{src && (
				<div className="w-full ssm:w-2/3 mt-4">
					<PreviewRatio>
						<Preview
							src={src}
							onError={e =>
								setSrc("/uploads/placeholders/no-yb-video.png")
							}
							alt="youtube video preview"
							fill
						/>
					</PreviewRatio>
				</div>
			)}
		</div>
	)
})
YoutubeLinkField.displayName = "YoutubeLinkField"

const PreviewRatio = tw.div`ratio-16-9`

const Preview = tw(Image)`full-screen rounded-layout image-like-bg`
Preview.defaultProps = { draggable: false }

export default YoutubeLinkField
