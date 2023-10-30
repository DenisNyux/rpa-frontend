import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import DepartmentSingleMember from "../DepartmentSingleMember/DepartmentSingleMember";
import getFullImageUrl from "@/lib/getFullImageUrl";
import { MemberType } from "@/types/MemberType";

type DepartmentMembersProps = {
  membersArr: MemberType[],
  depSlug: string
  isDepartment: boolean
}

function DepartmentMembers({membersArr, depSlug, isDepartment}: DepartmentMembersProps) {
  // console.log(depSlug);
  return (
    <div className="my-8">

      <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
        {membersArr.map((member, idx) => (
          <DepartmentSingleMember
            memName={member.attributes.name}
            memEducation={member.attributes.education}
            memJob={member.attributes.workPlace}
            memContacts={member.attributes.contact}
            depSlug={depSlug}
            memImage={getFullImageUrl(member.attributes.avatar.data?.attributes.url, "/member.svg")}
            memSlug={member.attributes.slug}
            key={idx}
            isDepartment={isDepartment}
          />
        ))}
      </div>
       
       

      </div>
  );
}

export default DepartmentMembers;
