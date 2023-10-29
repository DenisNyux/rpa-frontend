import getSupervisors from "@/api/singlePages/getSupervisors";
import { SupervisorsDataResponse } from "@/types/Singlepages";
import DepartmentMembers from "@/components/SharedComponents/DepartmentMembers/DepartmentMembers";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import separateToParagraphs from "@/lib/separateToParagraphs";

async function Supervisors() {
  const cgData: Promise<SupervisorsDataResponse> = getSupervisors();
  const cgContent = await cgData;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/structure" text="К структуре" />
      <h2 className="mt-6 mb-6">Супервизоры РПА</h2>
      {cgContent.data.attributes.supervisorsAdditionalText && (
        <>
          <span className="text-base flex flex-col gap-3 lg:text-xl">
            {separateToParagraphs(
              cgContent.data.attributes.supervisorsAdditionalText
            )}
          </span>
          <LineSeparatedHeader
            headerTitle="Члены координационного совета"
            headerColor="#000000"
            className="my-6"
          ></LineSeparatedHeader>
        </>
      )}

      <DepartmentMembers
        membersArr={cgContent.data.attributes.rpaMembers.data}
        depSlug="structure/supervisors"
        isDepartment={false}
      ></DepartmentMembers>
    </div>
  );
}

export default Supervisors;
