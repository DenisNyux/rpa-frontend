import Link from "next/link";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";

async function Structure() {
  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6">Структура РПА</h2>
      <div className="flex align-center justify-center my-4">
        <div className=" w-2/4">
          <RoundSquareLink linkTitle="Президент" url="structure/president" />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <RoundSquareLink linkTitle="Вице-президенты" url="structure/vise-president" />
        <RoundSquareLink linkTitle="Совет супервизоров" url="structure/supervisors-committee" />
        <RoundSquareLink linkTitle="Этический комитет" url="structure/ethical-committee" />
        <RoundSquareLink linkTitle="Ревизионная комиссия" url="structure/revision-group" />
        <RoundSquareLink linkTitle="Координационный совет" url="structure/coordination-group" />
        <RoundSquareLink linkTitle="Супервизоры" url="structure/supervisors" />
      </div>
    </div>
  );
}

export default Structure;
