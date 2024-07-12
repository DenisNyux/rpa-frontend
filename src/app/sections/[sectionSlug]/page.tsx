import getSection from "@/requests/sections/getSingleSection";

import Link from "next/link";

import SectionsRight from "@/components/Sections/SectionsRight/SectionsRight";
import SectionsLeft from "@/components/Sections/SectionsLeft/SectionsLeft";
import TabsSection from "@/components/Sections/TabsSection/TabsSection";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import DocumentCard from "@/components/Documents/DocumentCard/DocumentCard";

import { SectionsType } from "@/types/SectionsType";

type SingleSectionPageProps = {
  params: {
    sectionSlug: string;
  };
};

async function SingleSectionPage({ params }: SingleSectionPageProps) {
  const singleSectionData: Promise<SectionsType> = await getSection(
    params.sectionSlug
  );
  const singleSection = (await singleSectionData)?.data[0]?.attributes;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <Link href={`/sections`} className=" text-[#5E050D] text-base leading-5">
        ← Назад
      </Link>

      {singleSection && (
        <>
          <div className="mb-8">
            <h2 className="mt-2 mb-4">{singleSection.sectionTitle}</h2>
            <div className="flex flex-row md:flex-col-reverse gap-4 ">
              <SectionsLeft
                sectionDescription={singleSection.sectionDescription}
              />
              <SectionsRight
                sectionHead={singleSection.sectionHead}
                sectionLogo={singleSection.sectionLogo}
                sectionMembers={singleSection.sectionMembers}
                sectionSlug={singleSection.sectionSlug}
                sectionContacts={singleSection.sectionContacts}
                estDate={singleSection.estDate}
              />
            </div>
          </div>

          {singleSection.sectionTabs &&
            singleSection.sectionTabs.length > 0 && (
              <>
                {singleSection.sectionTabsView && (
                  <LineSeparatedHeader
                    headerTitle="Информация"
                    headerColor="#5e050d"
                  />
                )}
                <TabsSection
                  sectionTabs={singleSection.sectionTabs}
                  sectionTabsView={singleSection.sectionTabsView}
                />
              </>
            )}

          {singleSection.sectionDocuments.data.length > 0 && (
            <LineSeparatedHeader
              headerTitle="Документы"
              headerColor="#5e050d"
            />
          )}

          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-1">
            {singleSection.sectionDocuments.data.map((doc) => {
              return (
                <DocumentCard
                  key={`${params.sectionSlug}-${doc.id}`}
                  mainDocument={doc}
                  attachmentsDocuments={null}
                ></DocumentCard>
              );
            })}
          </div>
        </>
      )}
      {!singleSection && <h2 className="mt-2">Извините, секция не найдена</h2>}
    </div>
  );
}

export default SingleSectionPage;
