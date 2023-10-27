import React from "react";

import DepartmentCard from "@/components/Department/DepartmentCard/DepartmentCard";
import getAllDepartments from "@/api/departments/getAllDepartments";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";

import Link from "next/link";

import { DepartmentsData } from "@/types/DepartmentsType";

async function Departments() {

  const departmentsData: Promise<DepartmentsData> = getAllDepartments();
  const departments = await departmentsData;

  const departmentsArr = departments.data;
  const sortedDepartments = departmentsArr.sort((a, b) => a.attributes.depTitle.localeCompare(b.attributes.depTitle));  

  return (
    <div className="mt-6 mb-12 mx-20 lg:mx-12 xs:mx-8">
    <BackButton href="/" text="На главную"></BackButton>
    <div className=" grid grid-cols-4 gap-6 mt-6 lg:grid-cols-3 sm:grid-cols-2 ">
      {sortedDepartments.map((department, index) => {
        return (
          <DepartmentCard
            departmentName={department.attributes.depTitle}
            departmentSlug={department.attributes.slug}
            departmentImage={department.attributes.coat.data?.attributes.url}
            departmentId={department.id}
            key={index}
          />
        );
      })}
    </div>
    </div>
  );
}

export default Departments;
