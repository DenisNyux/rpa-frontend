import Image from "next/image";

import YoutubeVideo from "@/components/SharedComponents/YoutubeVideo/YoutubeVideo";
import SquareLink from "@/components/Homepage/SquareLink/SquareLink";

export default function Home() {
  const squareLinks = [
    {
      title: "Члены РПА",
      href: "/",
      image: "/member.svg",
    },
    {
      title: "Документы",
      href: "/",
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

  return (
    <div className="mt-8 mb-8 ml-16 mr-16">
      <div className="flex w-full">
        <div className="w-1/2 flex flex-col gap-8 pr-6">
          <h2>Добро пожаловать на сайт РПА!</h2>
          <div className="w-full">
            <YoutubeVideo videoId="BK7egvDg5L8" />
          </div>
          <span>
            Общественная организация “Российская Психотерапевтическая
            Ассоциация” является добровольным общественным объединением врачей и
            других специалистов, работающих в области психотерапии, созданным в
            целях совершенствования их профессиональной, научной,
            просветительской деятельности и повышения эффективности
            психотерапевтической помощи населению.
          </span>
        </div>
        <div className="w-1/2 p-6 grid grid-cols-2 grid-rows-2 gap-6">
          {squareLinks.map((link, index) => (
            <SquareLink
              image={link.image}
              href={link.href}
              title={link.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
