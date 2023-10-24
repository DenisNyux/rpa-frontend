import React from "react";
import Image from "next/image";

import styles from "./DepartmentCard.module.css";
import Link from "next/link";
import getFullImageUrl from "@/lib/getFullImageUrl";

interface DepartmentCardProps {
  departmentName: string | null | undefined;
  departmentSlug: string | null | undefined;
  departmentImage: string | null | undefined;
  departmentId: number | null | undefined;
}

function DepartmentCard({
  departmentName,
  departmentSlug,
  departmentImage,
  departmentId
}: DepartmentCardProps) {
  const fallbackDepartment = "/fallbackDepartment.svg";
  const depImage = getFullImageUrl(departmentImage, fallbackDepartment);
  console.log(depImage, 'depImage')
  return (
    <Link href={`/departments/${departmentSlug}`} className="clickable__animation__no__brightness">
      <div
        className={`${styles.departmentCard} aspect-square default__shadow flex flex-col items-center gap-6`}
      >
        <h4 className="mx-1 mt-6 text-center">{departmentName}</h4>
        <Image src={depImage} width={100} height={100} alt="link-ico" />
      </div>
    </Link>
  );
}

export default DepartmentCard;
