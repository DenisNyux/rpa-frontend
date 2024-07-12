import Link from "next/link";

import NewMemberModal from "@/components/Modals/NewMemberModal/NewMemberModal";
import ApplicationForm from "@/components/Application/ApplicationForm";

import getAllDepartments from "@/requests/departments/getAllDepartments";

import { DepartmentsData } from "@/types/DepartmentsType";

async function ApplyForMembership() {
  const departmentsData: Promise<DepartmentsData> = getAllDepartments();
  const departmentsObj = await departmentsData;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <ApplicationForm/>

    </div>
  );
}

export default ApplyForMembership;
