import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import DepartmentSingleMember from "../DepartmentSingleMember/DepartmentSingleMember";
import getFullImageUrl from "@/lib/getFullImageUrl";

type DepartmentHeadProps = {
  headName: string;
  headEducation: string | null | undefined;
  headJob: string | null | undefined;
  headContacts: string | null | undefined;
  headImage: string | null | undefined;
  headSlug: string;
  depSlug: string;
}

function DepartmentHead({headName, headEducation, headJob, headContacts, headImage, headSlug, depSlug}: DepartmentHeadProps) {
  return (
    <div className="my-8">
      <LineSeparatedHeader
        headerTitle="Руководитель отделения"
        headerColor="rgba(0, 0, 0, 0.50)"
      />
      <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
        <DepartmentSingleMember
          memName={headName}
          memEducation={headEducation}
          memJob={headJob}
          memContacts={headContacts}
          memImage={getFullImageUrl(headImage, "/member.svg")}
          memSlug={headSlug}
          depSlug={depSlug}
        />
       
       

      </div>
    </div>
  );
}

export default DepartmentHead;
