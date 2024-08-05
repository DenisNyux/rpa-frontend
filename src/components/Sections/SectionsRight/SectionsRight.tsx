import { FC } from "react";
import Image from "next/image";

import OneLineMember from "@/components/SharedComponents/OneLineMember/OneLineMember";
import Accordion from "@/components/SharedComponents/Accordion/Accordion";

import { MediaType } from "@/types/DocumentsType";

import styles from "./SectionsRight.module.css";

import getFullImageUrl from "@/lib/getFullImageUrl";
import { MemberType } from "@/types/MemberType";

type SectionsRightProps = {
  sectionLogo: { data: MediaType } | null;
  estDate: string | null;
  sectionContacts: string | null;
  sectionHead: { data: MemberType } | null;
  sectionSlug: string;
  sectionMembers: { data: MemberType[] };
  sectionCoordinator: { data: MemberType } | null;
};

const SectionsRight: FC<SectionsRightProps> = ({
  sectionLogo,
  estDate,
  sectionContacts,
  sectionHead,
  sectionSlug,
  sectionMembers,
  sectionCoordinator,
}) => {
  return (
    <div className={styles.sectionsRight}>
      <div className="mb-4">
        {sectionLogo && sectionLogo.data && (
          <>
            <h4 className="font-bold mb-2">Логотип:</h4>
            <div className="">
              <Image
                src={getFullImageUrl(
                  sectionLogo.data.attributes.url,
                  "./member.svg"
                )}
                alt="member-photo"
                width={300}
                height={300}
                className="w-full rounded-[10px]"
              />
            </div>
          </>
        )}
      </div>

      {estDate && (
        <div className="flex flex-row items-center gap-2 my-2">
          <h4 className="font-bold">Дата основания:</h4>
          <p className="font-bold text-base">
            {new Date(estDate).toLocaleDateString("ru-RU")}
          </p>
        </div>
      )}

      {sectionHead && sectionHead.data && (
        <>
          <h4 className="font-bold my-2">Руководитель секции:</h4>
          <OneLineMember
            name={sectionHead.data.attributes.name}
            avatarUrl={getFullImageUrl(
              sectionHead.data.attributes.avatar.data.attributes.url,
              "./member.svg"
            )}
            url={sectionSlug + "/" + sectionHead?.data.attributes.slug}
          />
        </>
      )}

      {sectionCoordinator && sectionCoordinator.data && (
        <>
          <h4 className="font-bold my-2">Координатор секции:</h4>
          <OneLineMember
            name={sectionCoordinator.data.attributes.name}
            avatarUrl={getFullImageUrl(
              sectionCoordinator.data.attributes.avatar.data.attributes.url,
              "./member.svg"
            )}
            url={sectionSlug + "/" + sectionCoordinator?.data.attributes.slug}
          />
        </>
      )}

      {sectionContacts && (
        <div className="flex flex-row items-center gap-2 my-2">
          <h4 className="font-bold">Контакты:</h4>
          <a
            className="font-bold text-base text-[#5E050D]"
            href={`mailto:${sectionContacts}`}
          >
            {sectionContacts}
          </a>
        </div>
      )}

      {sectionMembers && sectionMembers.data.length > 0 && (
        <div className="my-2 flex flex-col gap-2">
          {/* <h4 className="font-bold">Члены секции:</h4> */}
          <Accordion title="Члены секции">
            {sectionMembers?.data.map((member) => (
              <OneLineMember
                key={member.id}
                name={member.attributes.name}
                avatarUrl={getFullImageUrl(
                  member.attributes.avatar.data.attributes.url,
                  "./member.svg"
                )}
                url={sectionSlug + "/" + member.attributes.slug}
              />
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default SectionsRight;
