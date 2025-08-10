export default function getFullImageUrl(partialUrl: string | undefined | null, fallbackImageUrl: string) {
    if (partialUrl) {
        const apiUrl = process.env.API_URL ?? "https://console.rpa-russia.ru";
        return `${apiUrl}${partialUrl}`
    } else {
        return fallbackImageUrl
    }
}