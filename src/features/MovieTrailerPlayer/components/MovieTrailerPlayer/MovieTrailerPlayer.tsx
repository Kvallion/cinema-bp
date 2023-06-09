import { memo } from "react"
import YouTube from "react-youtube"
import tw from "twin.macro"
import { useYbLink } from "@entities/YoutubeLinkField"

type MovieTrailerPlayerProps = {
	videoUrl: string
	className?: string
}

const MovieTrailerPlayer: React.FC<MovieTrailerPlayerProps> = ({
	videoUrl,
	className,
}) => {
	const videoId = useYbLink(videoUrl)
	return (
		<div className={className}>
			<Heading>Movie&apos;s official trailer.</Heading>
			<PlayerRatio>
				<YouTube
					videoId={videoId}
					className="full-screen"
					iframeClassName="w-full h-full"
					opts={{ height: "360", width: "100%" }}
				/>
			</PlayerRatio>
		</div>
	)
}

const PlayerRatio = tw.div`ratio-16-9`

const Heading = tw.h3`text-white text-opacity-60 text-3xl mb-4`

export default memo(MovieTrailerPlayer)
