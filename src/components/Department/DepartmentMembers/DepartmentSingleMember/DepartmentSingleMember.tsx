import Image from "next/image";
import Link from "next/link";

import styles from "./DepartmentSingleMember.module.css";

type DepartmentSingleMemberProps = {
  memName: string;
  memEducation: string | null | undefined;
  memJob: string | null | undefined;
  memContacts: string | null | undefined;
  memImage: string;
  depSlug: string;
  memSlug: string;
};

function DepartmentSingleMember({
  memName,
  memEducation,
  memJob,
  memContacts,
  memImage,
  depSlug,
  memSlug,
}: DepartmentSingleMemberProps) {

  // console.log(depSlug, 'depSingleMember')
  return (
    <div className={`p-6 background-white ${styles.departmentCard} flex flex-col`}>
      <h4 className="mb-4 font-bold">{memName}</h4>
      <div className="flex justify-between grid grid-cols-2 gap-2 grow">
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
              <p>{memEducation ? memEducation: "Не указано"}</p>
            </span>
            <span>
              <p>Место работы:</p>
              <p>{memJob ? memJob: "Не указано"}</p>
            </span>
            <span>
              <p>Контакты</p>
              <p>{memContacts ? memContacts: "Не указано"}</p>
            </span>
          </div>
          <Link href={`/departments/${depSlug}/${memSlug}`} className={`${styles.departmentCard__button} clickable__animation`}>
            <button>Подробнее →</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DepartmentSingleMember;
