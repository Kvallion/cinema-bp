import axios from "axios"
import { useRouter } from "next/router"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import { useAppSelector } from "@hooks/redux"
import { selectAccessToken } from "@features/authorization"
import { AUTH } from "@shared/routes/routes"

export default function useFileUpload(
	type: "image" | "video",
	onChange: (...args: any[]) => void,
	folder?: string
) {
	const [isUploading, setIsUploading] = useState(false)
	const { push } = useRouter()
	const accessToken = useAppSelector(selectAccessToken)

	useEffect(() => {
		if (!accessToken) push(AUTH)
	}, [accessToken])

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsUploading(true)
			const files = e.target.files
			if (!files?.length) return
			if (type === "image" && !files[0].type.startsWith("image/")) return
			if (type === "video" && !files[0].type.startsWith("video/")) return

			const formData = new FormData()
			formData.append("image", files[0])

			upload(accessToken!, formData, folder).then(url => {
				onChange(url)
				setIsUploading(false)
			})
		},
		[upload]
	)

	return useMemo(
		() => ({ uploadFile, isUploading }),
		[uploadFile, isUploading]
	)
}

async function upload(accessToken: string, file: FormData, folder?: string) {
	const res = await axios.post<{ url: string; name: string }[]>(
		process.env.APP_SERVER_URL + "/api/files",
		file,
		{
			params: { folder },
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
	return res.data[0].url
}
