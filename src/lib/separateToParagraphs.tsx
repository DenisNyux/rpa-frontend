export default function separateToParagraphs(sourceString: string | null | undefined) {
    if (!sourceString) {
        return null;
    }
    const separatedSourceString = sourceString.split('\n');
    return separatedSourceString.map((paragraph, idx) => {
        return <p key={idx}>{paragraph}</p>;
    });

}