import Link from "next/link"

import getAllNews from "@/api/news/getAllNews";
import getAllRubrics from "@/api/news/getAllRubrics";
import { NewsType, RubricsType } from "@/types/NewsType";

import NewsSingleOnPage  from "@/components/News/NewsSingleOnPage/NewsSingleOnPage";

async function News() {

  const newsData: Promise<NewsType> = getAllNews();
  const newsRubrics: Promise<RubricsType> = getAllRubrics();
  const news = await newsData;
  const rubrics = await newsRubrics;
  
  const sortedNews = news.data.sort((a, b) => { return new Date(b.attributes.pubDate).getTime() - new Date(a.attributes.pubDate).getTime()} )

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <Link href={`/`} className=" text-[#5E050D] text-base leading-5">← На главную</Link>
      {/* <h2 className="mt-6">Новости РПА</h2> */}
      <div className="flex flex-col gap-16 mt-6">
        {sortedNews.map((item, index) => (
          <NewsSingleOnPage key={index} newsSingleObject={item}></NewsSingleOnPage>
        ))}
      </div>
    </div>
  )
}

export default News