"use client";
import { useState } from "react";

import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";

function Join() {
  const [memberDepartment, setMemberDepartment] = useState<
    "msk" | "other" | null
  >(null);

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6"></h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl">
        {
          'На этой странице вы можете заполнить форму для того чтобы попасть в РПА, здесь также представлена форма для членов РПА, желающих оказаться на сайте в разделе "Члены РПА"'
        }
      </span>
      <div className="mt-6 grid grid-cols-2 gap-6">
        {memberDepartment === null && (
          <div className="flex gap-3">
            <button
              className="bg-[#5e050d] text-white p-2 rounded-md"
              onClick={() => setMemberDepartment("msk")}
            >
              Московское отделение
            </button>
            <button
              className="bg-[#5e050d] text-white p-2 rounded-md"
              onClick={() => setMemberDepartment("other")}
            >
              Другое отделение
            </button>
          </div>
        )}

        {memberDepartment === "msk" && (
          <>
          <button className="text-[#5e050d] p-2 rounded-md col-span-2 underline flex" onClick={() => {setMemberDepartment(null);}}>← Назад</button>
            <RoundSquareLink
              linkTitle="Анкета на вступление в РПА Московское отделение"
              url="https://forms.yandex.ru/u/6683cc37068ff01699b488fc/"
            />
            <RoundSquareLink
              linkTitle="Информация на сайт о членах Московского РПА"
              url="https://forms.yandex.ru/u/66864e7b3e9d0803431314c1/"
            />
          </>
        )}

        {memberDepartment === "other" && (
          <>
          <button className="text-[#5e050d] p-2 rounded-md self-baseline col-span-2 underline flex" onClick={() => {setMemberDepartment(null);}}>← Назад</button>
            <RoundSquareLink
              linkTitle="Заполнить форму для вступления в РПА"
              url="https://forms.gle/bJ34fseY8NN6SiLM9"
            />
            <RoundSquareLink
              linkTitle="Попасть на сайт РПА"
              url="https://forms.gle/Br9y3JUL1D5HDwsH7"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Join;
