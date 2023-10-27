export default function cutStringByWords(sourceString: string, limit: number) {
    const separatedSourceString = sourceString.split(' ');
    if (separatedSourceString.length > limit) {
        return separatedSourceString.splice(0, limit).join(' ') + '...';
    } else {
        return sourceString;
    }
}