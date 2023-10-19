import Link from "next/link";
import getAboutRpaText from "@/api/singlePages/getAboutRpaText";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";

import { AboutRpaTextResponse } from "@/types/Singlepages";

async function AboutRpa() {
  const aboutData: Promise<AboutRpaTextResponse> = getAboutRpaText();
  const aboutText = await aboutData;

  console.log(aboutText);

  return (
    <div className="mt-6 mb-12 mx-36">
      <BackButton href="/" text="На главную"/>
      <h2 className="mt-6 mb-3">РПА</h2>
      <div className="flex flex-col gap-3">
        <span className="text-sm flex flex-col gap-3">
          {aboutText.data.attributes.about_rpa_text_before_buttons
            ?.split("\n")
            .map((paragraph, idx) => {
              return <p key={idx}>{paragraph}</p>;
            })}
        </span>
        <div className="flex w-100 gap-4 items-center my-8">
          <RoundSquareLink linkTitle="Структура" url="/structure" />
          <RoundSquareLink linkTitle="Реквизиты" url="/requisites" />
        </div>
        <span className="text-sm flex flex-col gap-3">
          {aboutText.data.attributes.about_rpa_text_after_buttons
            ?.split("\n")
            .map((paragraph, idx) => {
              return <p key={idx}>{paragraph}</p>;
            })}
        </span>
      </div>
    </div>
  );
}

export default AboutRpa;
