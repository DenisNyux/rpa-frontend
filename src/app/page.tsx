import Image from "next/image";

import getHomepageText from "@/requests/singlePages/getHomepageText";

import { HomepageTextResponse } from "@/types/Singlepages";

import YoutubeVideo from "@/components/SharedComponents/YoutubeVideo/YoutubeVideo";
import SquareLink from "@/components/Homepage/SquareLink/SquareLink";

export default async function Home() {
  const squareLinks = [
    {
      title: "Члены РПА",
      href: "/departments",
      image: "/member.svg",
    },
    {
      title: "Документы",
      href: "/documents",
      image: "/document.svg",
    },
    {
      title: "Вступить в РПА",
      href: "/join",
      image: "/join.svg",
    },
    {
      title: "Мероприятия",
      href: "/events",
      image: "/calendar.svg",
    },
  ];

  const homepageData: Promise<HomepageTextResponse> = await getHomepageText();
  const homepageText = (await homepageData).data.attributes.mainText;
  const homepageLink = (await homepageData).data.attributes.videoLink;


  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <div className="flex w-full lg:flex-col ">
        <div className="w-1/2 flex flex-col gap-8 pr-6 lg:w-full">
          <h2>Добро пожаловать на сайт РПА!</h2>
          <div className="w-full">
            <YoutubeVideo videoLink={homepageLink} />
          </div>
          <span className="text-base">
            {
              homepageText
            }
          </span>
        </div>
        <div className="w-1/2 p-6 grid grid-cols-2 grid-rows-2 gap-6 lg:w-full lg:grid-cols-4 lg:grid-rows-1 lg:p-0 lg:py-6 md:gap-3 sm:grid-cols-2 sm:grid-rows-2">
          {squareLinks.map((link, index) => (
            <SquareLink
              image={link.image}
              href={link.href}
              title={link.title}
              key={`link-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
