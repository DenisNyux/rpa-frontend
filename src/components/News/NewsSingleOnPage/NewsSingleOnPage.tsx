import Link from "next/link"
import { SingleNews } from "@/types/NewsType"

import styles from './NewsSingleOnPage.module.css'

interface NewsSingleOnPageProps {
    newsSingleObject: SingleNews
}

function NewsSingleOnPage({ newsSingleObject }: NewsSingleOnPageProps) {

  const newsSingleSepText = newsSingleObject.attributes.newsContent.split('\n').slice(0, 3);
  return (
    <div className="flex flex-col gap-2">
        <span className={styles.newsSingleOnPage__rubrick}>{newsSingleObject.attributes.rubrick.data.attributes.rubTitle}</span>
        <h2 className={styles.newsSingleOnPage__newsTitle}>{newsSingleObject.attributes.newsTitle}</h2>
        <span className={styles.newsSingleOnPage__newsContent}>{newsSingleSepText.map((paragraph) => { return <p key={paragraph}>{paragraph}</p>})}</span>
        <Link href={`/news/${newsSingleObject.attributes.newsSlug}`} className={styles.newsSingleOnPage__readMore}>Читать далее...</Link>
    </div>
  )
}

export default NewsSingleOnPage