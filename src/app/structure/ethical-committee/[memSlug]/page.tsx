import getMember from "@/requests/departments/getMember";
import { MemberType } from "@/types/MemberType";
import Link from "next/link";
import getFullImageUrl from "@/lib/getFullImageUrl";
import styles from './membersPage.module.css'
import Image from "next/image";

type MemberPageProps = {
  params: {
    memSlug: string;
  };
};

type MemberResponse = {
  data: MemberType[];
}

async function MemberPage({ params }: MemberPageProps) {
  
  const memberData: Promise<MemberResponse> = getMember(params.memSlug);
  const memberObj = await memberData;
  const member = memberObj.data[0].attributes;

  
  return <div className="mt-6 mb-12 mx-20 lg:mx-12 xs:mx-8">
    
    <Link href={`/structure/ethical-committee/`} className=" text-[#5E050D] text-base leading-5">← Назад</Link>
    
    <h2 className="mt-6">{member.name}</h2>
   
    <div className="grid grid-cols-4 gap-8 mt-6 sm:grid-cols-1">
      <div className="col-span-1 lg:col-span-2 sm:col-span-1">
        <Image
          src={getFullImageUrl(member.avatar.data.attributes.url, './member.svg')}
          alt="member-photo"
          className="w-full rounded-[10px]"
          width={300}
          height={400}
          unoptimized={true}
        ></Image>
      </div>
      <div className={`col-span-3 flex flex-col ${styles.memberText} gap-5 lg:col-span-2 sm:col-span-1`}>
      <span>
          <p>Место работы:</p>
          <p>{member.workPlace}</p>
        </span>
        <span>
          <p>Профессиональные контакты:</p>
          <p>{member.contact}</p>
        </span>
        <span>
          <p>Образование:</p>
          <p>{member.education}</p>
        </span>
        
        <span>
          <p>Специализация:</p>
          <p>{member.specialization}</p>
        </span>

        <span>
          <p>Ученая степень:</p>
          <p>{member.degree}</p>
        </span>

        <span>
          <p>Направление(я) психотерапии:</p>
          <p>{member.therapyType}</p>
        </span>
      </div>
    </div>
    </div>;
}

export default MemberPage;
