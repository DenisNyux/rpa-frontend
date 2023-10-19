import Link from "next/link";
import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";

async function Structure() {
  return (
    <div className="mt-6 mb-12 mx-36">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6">Структура РПА</h2>
      <div className="flex align-center justify-center my-4">
        <div className=" w-2/4">
          <RoundSquareLink linkTitle="Президент" url="/president" />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <RoundSquareLink linkTitle="Вице-президенты" url="/vise-president" />
        <RoundSquareLink linkTitle="Совет супервизоров" url="/supervisors-сommittee" />
        <RoundSquareLink linkTitle="Этический комитет" url="/ethical-committee" />
        <RoundSquareLink linkTitle="Ревизионная комиссия" url="/revision-group" />
        <RoundSquareLink linkTitle="Координационный совет" url="/coordination-group" />
        <RoundSquareLink linkTitle="Супервизоры" url="/supervisors" />
      </div>
    </div>
  );
}

export default Structure;
