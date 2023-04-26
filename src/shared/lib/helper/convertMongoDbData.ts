export default function convertMongoDbDate(date: string): string {
	return new Date(date).toLocaleDateString("ru")
}
