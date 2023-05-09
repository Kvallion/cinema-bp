import { compare } from "fast-string-compare"

export default function fastIsEqual(str1: string, str2: string) {
	return compare(str1, str2) === 0
}
