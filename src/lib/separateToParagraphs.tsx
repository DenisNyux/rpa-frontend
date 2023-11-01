export default function separateToParagraphs(
  sourceString: string | null | undefined 
) {
  if (sourceString) {
    const regex = /\[(.*?)\]\((.*?)\)/g;

    const separatedSourceString = sourceString.split("\n");
    return separatedSourceString.map((paragraph, idx) => {
      const elements = [];
      let remainingString = paragraph;
      let match;
      let lastIndex = 0;

      while ((match = regex.exec(paragraph)) !== null) {
        const linkText = match[1];
        const linkUrl = match[2];
        const index = match.index;

        // Add the text before the link
        if (index > lastIndex) {
          elements.push(remainingString.substring(lastIndex, index));
        }

        // Add the JSX for the link
        elements.push(
          <a key={index} href={linkUrl} className="underline text-bold decoration-solid	text-[#5e050d]">
            {linkText}
          </a>
        );

        lastIndex = index + match[0].length;
      }

      // Add the remaining text after the last link
      if (lastIndex < paragraph.length) {
        elements.push(remainingString.substring(lastIndex));
      }

      return <p key={idx}>{elements}</p>;
    });
  } else {
    return sourceString;
  }
}
