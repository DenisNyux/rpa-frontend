import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";

import getAllSections from "@/requests/sections/getAllSections";

import { SectionsType } from "@/types/SectionsType";

async function Sections() {
  const sections: Promise<SectionsType> = getAllSections();
  const sectionData = await sections;

  const sectionsList = sectionData ? sectionData.data.map((section, index) => {
    {
      return {
        title: section.attributes.sectionTitle,
        slug: section.attributes.sectionSlug,
      };
    }
  }) : [];

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6">Секции РПА</h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl">
        На данной странице вы можете ознакомиться со всеми секциями РПА
      </span>
      <div className="p-4 grid grid-cols-2 gap-8 mt-6">
        {sectionsList.map((section, index) => {
          return (
            <RoundSquareLink
              key={index}
              linkTitle={section.title}
              url={`/sections/${section.slug}`}
            ></RoundSquareLink>
          );
        })}
        {sectionsList.length === 0 && (
          <h2 className="mt-6 mb-6">Извините, секции не найдены</h2>
        )}
      </div>
    </div>
  );
}

export default Sections;
