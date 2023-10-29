import Image from "next/image";
import Link from "next/link";

import cutStringByWords from "@/lib/cutStringByWords";

import styles from "./DepartmentSingleMember.module.css";

type DepartmentSingleMemberProps = {
  memName: string;
  memEducation: string | null | undefined;
  memJob: string | null | undefined;
  memContacts: string | null | undefined;
  memImage: string;
  depSlug: string;
  memSlug: string;
  isDepartment: boolean;
};

function DepartmentSingleMember({
  memName,
  memEducation,
  memJob,
  memContacts,
  memImage,
  depSlug,
  memSlug,
  isDepartment
}: DepartmentSingleMemberProps) {

  // console.log(depSlug, 'depSingleMember')
  return (
    <div className={`p-6 background-white ${styles.departmentCard} flex flex-col aspect-square md:aspect-[4/3] sm:aspect-square`}>
      <h4 className="mb-4 font-bold lg:text-xl">{memName}</h4>
      <div className="flex justify-between grid grid-cols-2 gap-2 grow h-10/12">
        <div className={`${styles.departmentCard__image}`}>
            <Image
            src={memImage}
            alt="member-photo"
            width={300}
            height={400}
            ></Image>
        </div>
        <div className={`${styles.departmentCard__information} flex flex-col justify-between gap-4`}>
          <div className="flex flex-col gap-2">
            <span>
              <p>Образование:</p>
              <p>{memEducation ? cutStringByWords(memEducation, 7): "Не указано"}</p>
            </span>
            <span>
              <p>Место работы:</p>
              <p>{memJob ? cutStringByWords(memJob, 7): "Не указано"}</p>
            </span>
            <span>
              <p>Контакты</p>
              <p>{memContacts ? cutStringByWords(memContacts, 5): "Не указано"}</p>
            </span>
          </div>
          <Link href={ isDepartment ? `/departments/${depSlug}/${memSlug}` : `/${depSlug}/${memSlug}` } className={`${styles.departmentCard__button} clickable__animation`}>
            <button>Подробнее →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DepartmentSingleMember;
