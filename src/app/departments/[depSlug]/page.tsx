import React from "react";
import Link from "next/link";
import { DepartmentData } from "@/types/DepartmentsType";
import getDepartment from "@/requests/departments/getDepartment";
import DepartmentHead from "@/components/Department/DepartmentMembers/DepartmentHead/DepartmentHead";
import DepartmentMembers from "@/components/SharedComponents/DepartmentMembers/DepartmentMembers";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";

type DepartmentPageProps = {
  params: {
    depSlug: string;
  };
};

type DepartmentResponse = {
  data: DepartmentData[];
};

async function DepartmentPage({ params }: DepartmentPageProps) {
  const departmentsData: Promise<DepartmentResponse> = getDepartment(
    params.depSlug
  );
  const department = await departmentsData;

  const headOfDepartment = department?.data[0].attributes.headOfDep.data;

  const memberArr = department?.data[0].attributes.members.data

  const sortedMembers = memberArr.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  })

  return (
    <div className="mt-6 mb-12 mx-20 lg:mx-12 xs:mx-8">
      <Link href={"/departments"} className=" text-[#5E050D] text-base leading-5">← Назад</Link>

      <h2 className="uppercase mt-6">{department.data[0].attributes.depTitle}</h2>
      {headOfDepartment && (
        <DepartmentHead
          headName={headOfDepartment.attributes.name}
          headContacts={headOfDepartment.attributes.contact}
          headEducation={headOfDepartment.attributes.education}
          headImage={headOfDepartment.attributes.avatar.data.attributes.url}
          headJob={headOfDepartment.attributes.workPlace}
          headSlug={headOfDepartment.attributes.slug}
          depSlug={params.depSlug}
        />
      )}

      {memberArr.length > 0 ? <> <LineSeparatedHeader headerTitle="Члены отделения" headerColor="rgba(0, 0, 0, 0.50)" className="mt-6" ></LineSeparatedHeader><DepartmentMembers membersArr={sortedMembers} depSlug={params.depSlug} isDepartment={true}/></> : ''}
    </div>
  );
}

export default DepartmentPage;
