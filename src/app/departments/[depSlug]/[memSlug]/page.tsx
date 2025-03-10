import getMember from "@/requests/departments/getMember";
import { MemberType } from "@/types/MemberType";
import Link from "next/link";
import getFullImageUrl from "@/lib/getFullImageUrl";
import styles from "./membersPage.module.css";
import Image from "next/image";
import separateToParagraphs from "@/lib/separateToParagraphs";

type MemberPageProps = {
  params: {
    memSlug: string;
    depSlug: string;
  };
};

type MemberResponse = {
  data: MemberType[];
};

async function MemberPage({ params }: MemberPageProps) {
  const memberData: Promise<MemberResponse> = getMember(params.memSlug);
  const memberObj = await memberData;
  const member = memberObj.data[0].attributes;

  const sectTitle = member.headOfSection?.data?.attributes.sectionTitle;
  const sectSlug = member.headOfSection?.data?.attributes.sectionSlug;

  return (
    <div className="mt-6 mb-12 mx-20 lg:mx-12 xs:mx-8">
      <Link
        href={`/departments/${params.depSlug}`}
        className=" text-[#5E050D] text-base leading-5"
      >
        ← Назад
      </Link>

      <h2 className="mt-6">{member.name}</h2>
      {sectTitle && (
        <span className="text-base">
          Руководитель секции{" "}
          {sectSlug ? (
            <Link
              href={`/sections/${sectSlug}`}
              className="underline text-[#5e050d]"
            >
              {sectTitle}
            </Link>
          ) : (
            sectTitle
          )}
        </span>
      )}

      <div className="grid grid-cols-4 gap-8 mt-6 sm:grid-cols-1">
        <div className="col-span-1 lg:col-span-2 sm:col-span-1">
          <Image
            src={getFullImageUrl(
              member.avatar.data.attributes.url,
              "./member.svg"
            )}
            alt="member-photo"
            className="w-full rounded-[10px]"
            width={300}
            height={400}
            unoptimized={true}
          ></Image>
        </div>
        <div
          className={`col-span-3 flex flex-col ${styles.memberText} gap-5 lg:col-span-2 sm:col-span-1`}
        >
          <span>
            <p>Место работы:</p>
            {separateToParagraphs(member.workPlace)}
          </span>
          <span>
            <p>Профессиональные контакты:</p>
            {separateToParagraphs(member.contact)}
          </span>
          <span>
            <p>Образование:</p>
            {separateToParagraphs(member.education)}
          </span>

          <span>
            <p>Специализация:</p>
            {separateToParagraphs(member.specialization)}
          </span>

          <span>
            <p>Ученая степень:</p>
            {separateToParagraphs(member.degree)}
          </span>

          <span>
            <p>Направление(я) психотерапии:</p>
            {separateToParagraphs(member.therapyType)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
