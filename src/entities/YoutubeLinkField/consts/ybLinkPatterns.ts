export const YbLinkPatterns = [
	/watch\?.*v=([^&^\n]+)/,
	/\/v\/([^\?^\n]+)/,
	/be\/([^?^\n]+)/,
	/embed\/([^?^\n]+)/,
	/e\/([^?^\n]+)/,
]
export const commonPattern =
	/(watch\?.*v=([^&^\n]+))|(\/v\/([^\?^\n]+))|(be\/([^?^\n]+))|(embed\/([^?^\n]+))|(e\/([^?^\n]+))/

export const previewUrl = (videoId: string) =>
	`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
