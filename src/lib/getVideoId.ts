
export default function getVideoId(videoLink: string | null | undefined) {
    if (videoLink && videoLink.includes('https://youtu.be/')) {
        return videoLink.split('https://youtu.be/')[1]
    } else {
        return new Error('Invalid video link')
    }
}