export default function getFullImageUrl(partialUrl: string | undefined | null, fallbackImageUrl: string) {
    if (partialUrl) {
        return `${process.env.API_URL}${partialUrl}`
    } else {
        return fallbackImageUrl
    }
}