export const transliterate = {
	а: "a",
	б: "b",
	в: "v",
	г: "g",
	д: "d",
	е: "e",
	ё: "yo",
	ж: "zh",
	з: "z",
	и: "i",
	й: "j",
	к: "k",
	л: "l",
	м: "m",
	н: "n",
	о: "o",
	п: "p",
	р: "r",
	с: "s",
	т: "t",
	у: "u",
	ф: "f",
	х: "h",
	ц: "ts",
	ч: "ch",
	ш: "sh",
	щ: "shch",
	ъ: "",
	Ы: "y",
	Ь: "",
	э: "a",
	ю: "yu",
	я: "ya",
}

export type RussianLetter = keyof typeof transliterate

export default function generateSlug(str: string): string {
	let slug = str.trim().replace(/[\s]+/gi, "-").toLowerCase()

	slug = Array.from(slug)
		.map((symb) =>
			symb in transliterate ? transliterate[symb as RussianLetter] : symb
		)
		.join("")
		.replace(/[^0-9a-z_-]/gi, "")

	return slug
}
