import React from 'react'
import Link from 'next/link';

import { NewsType } from '@/types/NewsType';
import getSingleNews from '@/api/news/getSingleNews';
import styles from './SingleNewsPage.module.css'
import separateToParagraphs from '@/lib/separateToParagraphs';


type SingleNewsPageProps = {
    params: {
        newsSlug: string;
    };
  };

async function SingleNewsPage({ params }: SingleNewsPageProps) {

    const singleNewsData: Promise<NewsType> = getSingleNews(params.newsSlug);
    const singleNews = await singleNewsData;
    const exactNews = singleNews.data[0].attributes

    console.log(exactNews)
  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8 flex flex-col">
      <Link href={`/news`} className=" text-[#5E050D] text-base leading-5">← Назад</Link>
      <span className={`mt-6 ${styles.newsSingleOnPage__rubrick}`}>{exactNews.rubrick.data?.attributes.rubTitle}</span>
      <h2 className='mt-2'>{exactNews.newsTitle}</h2>
      <span className='flex flex-col gap-2 mt-6 text-base'>{separateToParagraphs(exactNews.newsContent)}</span>
    </div>
  )
}

export default SingleNewsPage