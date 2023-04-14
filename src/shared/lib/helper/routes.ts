export function addSlash(str: string) {
	if (!str) return str
	if (str[0] === "/") return str
	return "/" + str
}
