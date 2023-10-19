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

  return (
    <div className="mt-6 mb-12 mx-36">
      <Link href={`/`} className=" text-[#5E050D] text-base leading-5">← На главную</Link>
      {/* <h2 className="mt-6">Новости РПА</h2> */}
      <div className="flex flex-col gap-6 mt-6">
        {news.data.map((item, index) => (
          <NewsSingleOnPage key={index} newsSingleObject={item}></NewsSingleOnPage>
        ))}
      </div>
    </div>
  )
}

export default News