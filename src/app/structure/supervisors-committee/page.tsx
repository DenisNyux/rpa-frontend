import getSupervisorsComittee from "@/requests/singlePages/getSupervisorsComittee";
import { SupervisorsCommitteeDataResponse } from "@/types/Singlepages";
import DepartmentMembers from "@/components/SharedComponents/DepartmentMembers/DepartmentMembers";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import separateToParagraphs from "@/lib/separateToParagraphs";

async function SupervisorsCommittee() {
  const scData: Promise<SupervisorsCommitteeDataResponse> =
    getSupervisorsComittee();
  const scContent = await scData;

  const additionalText = scContent.data.attributes.supervisorsComAdditionalText;
  const members = scContent.data.attributes.rpaMembers.data;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/structure" text="К структуре" />
      <h2 className="mt-6 mb-6">Совет супервизоров РПА</h2>
      {additionalText && (
        <>
          <span className="text-base flex flex-col gap-3 lg:text-xl">
            {separateToParagraphs(additionalText)}
          </span>
          <LineSeparatedHeader
            headerTitle="Члены супервизорского совета"
            headerColor="#000000"
            className="my-6"
          ></LineSeparatedHeader>
        </>
      )}
      <DepartmentMembers
        membersArr={members}
        depSlug="structure/supervisors-committee"
        isDepartment={false}
      ></DepartmentMembers>
    </div>
  );
}

export default SupervisorsCommittee;
