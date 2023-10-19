import Link from "next/link"
import ApplicationForm from "@/components/Application/ApplicationForm"

function ApplyForMembership() {
  return (
    <div className="mt-6 mb-12 mx-36">
      <Link href={`/`} className=" text-[#5E050D] text-base leading-5">← На главную</Link>
      <h2 className="mt-6">Здесь вы можете заполнить форму для того чтобы попасть на сайт РПА</h2>
      <ApplicationForm/>

      {/* <form className="flex flex-col my-6">
        <label htmlFor="name" className="text-base leading-5">ФИО</label>
        <input type="text" id="name"></input>

      </form> */}
    </div>
  )
}

export default ApplyForMembership