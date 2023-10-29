import getEthicalComittee from "@/api/singlePages/getEthicalComittee";
import { EhticalComitteeDataResponse } from "@/types/Singlepages";
import DepartmentMembers from "@/components/SharedComponents/DepartmentMembers/DepartmentMembers";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import separateToParagraphs from "@/lib/separateToParagraphs";
import replaceMarkdownLinks from "@/lib/replaceLinks";

async function EthicalComittee() {
  const ecData: Promise<EhticalComitteeDataResponse> =
    getEthicalComittee();
  const ecContent = await ecData;

  const additionalText = ecContent.data.attributes.ethicalAdditionalText;
  const members = ecContent.data.attributes.rpaMembers.data;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/structure" text="К структуре" />
      <h2 className="mt-6 mb-6">Этический комитет РПА</h2>
      {additionalText && (
        <>
          <span className="text-base flex flex-col gap-3 lg:text-xl">
            {separateToParagraphs(additionalText)}
          </span>
          <LineSeparatedHeader
            headerTitle="Члены этического комитета"
            headerColor="#000000"
            className="my-6"
          ></LineSeparatedHeader>
        </>
      )}

      <DepartmentMembers
        membersArr={members}
        depSlug="structure/ethical-committee"
        isDepartment={false}
      ></DepartmentMembers>
    </div>
  );
}

export default EthicalComittee;
