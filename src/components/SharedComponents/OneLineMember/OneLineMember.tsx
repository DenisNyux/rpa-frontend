import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./OneLineMember.module.css";

import { MediaType } from "@/types/DocumentsType";

export type OneLineMemberProps = {
  name: string | null | undefined;
  avatarUrl: string;
  url: string;
};

const OneLineMember: FC<OneLineMemberProps> = ({ name, avatarUrl, url }) => {
  return (
    <Link href={url} className={styles.memberContainer}>
      <div className={styles.circleImage}>
      <Image
        src={avatarUrl}
        alt="member-photo"
        width={32}
        height={32}
        className="rounded-full"
      ></Image>
      </div>
      {name && <h4 className={styles.memberName}>{name}</h4>}
    </Link>
  );
};

export default OneLineMember;
