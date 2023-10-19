import Image from "next/image";

import getHomepageText from "@/api/singlePages/getHomepageText";

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
      href: "/",
      image: "/join.svg",
    },
    {
      title: "Мероприятия",
      href: "/",
      image: "/calendar.svg",
    },
  ];

  const homepageData: Promise<HomepageTextResponse> = await getHomepageText();
  const homepageText = (await homepageData).data.attributes.mainText;
  const homepageLink = (await homepageData).data.attributes.videoLink;


  return (
    <div className="mt-8 mb-8 ml-16 mr-16">
      <div className="flex w-full">
        <div className="w-1/2 flex flex-col gap-8 pr-6">
          <h2>Добро пожаловать на сайт РПА!</h2>
          <div className="w-full">
            <YoutubeVideo videoLink={homepageLink} />
          </div>
          <span className="text-base">
            {/* Общественная организация “Российская Психотерапевтическая
            Ассоциация” является добровольным общественным объединением врачей и
            других специалистов, работающих в области психотерапии, созданным в
            целях совершенствования их профессиональной, научной,
            просветительской деятельности и повышения эффективности
            психотерапевтической помощи населению. */}
            {
              homepageText
            }
          </span>
        </div>
        <div className="w-1/2 p-6 grid grid-cols-2 grid-rows-2 gap-6">
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
