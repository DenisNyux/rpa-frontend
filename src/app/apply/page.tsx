import Link from "next/link"
import ApplicationForm from "@/components/Application/ApplicationForm"
import getAllDepartments from "@/api/departments/getAllDepartments"

import { DepartmentsData } from "@/types/DepartmentsType";

async function ApplyForMembership() {

  const departmentsData: Promise<DepartmentsData> = getAllDepartments();
  const departmentsObj = await departmentsData;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <Link href={`/`} className=" text-[#5E050D] text-base leading-5">← На главную</Link>
      <h2 className="mt-6">Здесь вы можете заполнить форму для того чтобы попасть на сайт РПА</h2>
      <ApplicationForm departments={departmentsObj}/>

      {/* <form className="flex flex-col my-6">
        <label htmlFor="name" className="text-base leading-5">ФИО</label>
        <input type="text" id="name"></input>

      </form> */}
    </div>
  )
}

export default ApplyForMembership