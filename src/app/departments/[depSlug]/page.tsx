import React from "react";
import Link from "next/link";
import { DepartmentData } from "@/types/DepartmentsType";
import getDepartment from "@/api/departments/getDepartment";
import DepartmentHead from "@/components/Department/DepartmentMembers/DepartmentHead/DepartmentHead";
import DepartmentMembers from "@/components/Department/DepartmentMembers/DepartmentMembers/DepartmentMembers";

type DepartmentPageProps = {
  params: {
    depSlug: string;
  };
};

type DepartmentResponse = {
  data: DepartmentData[];
};

// TODO: Add 404 message if department not found
async function DepartmentPage({ params }: DepartmentPageProps) {
  const departmentsData: Promise<DepartmentResponse> = getDepartment(
    params.depSlug
  );
  const department = await departmentsData;

  const headOfDepartment = department.data[0].attributes.headOfDep.data;

  const memberArr = department.data[0].attributes.members.data

  const sortedMembers = memberArr.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  })

  console.log(memberArr.length)
  return (
    <div className="mt-6 mb-12 mx-36">
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

      {memberArr.length > 0 ? <DepartmentMembers membersArr={sortedMembers} depSlug={params.depSlug}/> : ''}
    </div>
  );
}

export default DepartmentPage;