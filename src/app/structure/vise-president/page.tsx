import getVisePresidents from "@/requests/singlePages/getVisePresidents";
import { VisePresidentDataResponse } from "@/types/Singlepages";
import DepartmentMembers from "@/components/SharedComponents/DepartmentMembers/DepartmentMembers";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";

async function VisePresidents() {

    const presidentData: Promise<VisePresidentDataResponse> = getVisePresidents();
    const presidentContent = await presidentData;
  
  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/structure" text="К структуре" />
      <h2 className="mt-6 mb-6">Вице-президенты РПА</h2>
      <DepartmentMembers membersArr={presidentContent.data.attributes.rpaMembers.data} depSlug="structure/vise-president" isDepartment={false}></DepartmentMembers>
    </div>
  );
}

export default VisePresidents;
