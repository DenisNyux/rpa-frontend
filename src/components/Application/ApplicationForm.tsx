"use client";
import { useState } from "react";

import Link from "next/link";

import NewMemberModal from "../Modals/NewMemberModal/NewMemberModal";

import styles from "./ApplicationForm.module.css";

function ApplicationForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Link href={`/`} className=" text-[#5E050D] text-base leading-5">
        ← На главную
      </Link>
      <h2 className="mt-6">
        Здесь вы можете заполнить форму для того чтобы попасть на сайт РПА
      </h2>

      <div>
        <button onClick={() => setIsModalOpen(true)}>test modal</button>

      </div>
      <NewMemberModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
}

export default ApplicationForm;
