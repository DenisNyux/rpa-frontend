import Link from "next/link";
import getAboutRpaText from "@/api/singlePages/getAboutRpaText";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";

import { AboutRpaTextResponse } from "@/types/Singlepages";
import separateToParagraphs from "@/lib/separateToParagraphs";

async function AboutRpa() {
  const aboutData: Promise<AboutRpaTextResponse> = getAboutRpaText();
  const aboutText = await aboutData;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную"/>
      <h2 className="mt-6 mb-3">РПА</h2>
      <div className="flex flex-col gap-3">
        <span className="text-sm flex flex-col gap-3">
 
            {separateToParagraphs(aboutText.data.attributes.about_rpa_text_before_buttons)}
        </span>
        <div className="flex w-100 gap-4 items-center my-8">
          <RoundSquareLink linkTitle="Структура" url="/structure" />
          <RoundSquareLink linkTitle="Реквизиты" url="/requisites" />
        </div>
        <span className="text-sm flex flex-col gap-3">
        {separateToParagraphs(aboutText.data.attributes.about_rpa_text_after_buttons)}

        </span>
      </div>
    </div>
  );
}

export default AboutRpa;
