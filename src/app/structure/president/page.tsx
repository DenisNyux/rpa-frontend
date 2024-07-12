import Image from "next/image";
import getPresident from "@/requests/singlePages/getPresident";
import { PresidentDataResponse } from "@/types/Singlepages";
import styles from "./presidentPage.module.css";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import separateToParagraphs from "@/lib/separateToParagraphs";

import getFullImageUrl from "@/lib/getFullImageUrl";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";

async function PresidentPage() {
  const presidentData: Promise<PresidentDataResponse> = getPresident();
  const presidentContent = await presidentData;

  const memberData =
    presidentContent.data.attributes.rpaMembers.data.attributes;

  const additionalText =
    presidentContent.data.attributes.presidentAdditionalText;
  

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/structure" text="К структуре" />
      <h2 className="mt-6 mb-6">Президент РПА - {memberData.name}</h2>

      <div className="grid grid-cols-4 gap-8 mt-6 sm:grid-cols-1">
        <div className="col-span-1 lg:col-span-2 sm:col-span-1">
          <Image
            src={getFullImageUrl(
              memberData.avatar.data.attributes.url,
              "./member.svg"
            )}
            alt="member-photo"
            className="w-full rounded-[10px]"
            width={300}
            height={400}
          ></Image>
        </div>
        <div
          className={`col-span-3 flex flex-col gap-5 ${styles.memberText} lg:col-span-2 sm:col-span-1 text-xl`}
        >
          <span>
            <p>Место работы:</p>
            <p>{memberData.workPlace}</p>
          </span>
          <span>
            <p>Профессиональные контакты:</p>
            <p>{memberData.contact}</p>
          </span>
          <span>
            <p>Образование:</p>
            <p>{memberData.education}</p>
          </span>

          <span>
            <p>Специализация:</p>
            <p>{memberData.specialization}</p>
          </span>

          <span>
            <p>Ученая степень:</p>
            <p>{memberData.degree}</p>
          </span>

          <span>
            <p>Направление(я) психотерапии:</p>
            <p>{memberData.therapyType}</p>
          </span>
        </div>
      </div>
      {additionalText ? (
        <div className={`my-10 ${styles.biographyText}`}>
          <LineSeparatedHeader
            headerTitle="Краткая биография"
            headerColor="black"
          />
          <span className="flex flex-col gap-3 text-base">{separateToParagraphs(additionalText)}</span>
        </div>
        
      ) : (
        <></>
      )}
    </div>
  );
}

export default PresidentPage;
