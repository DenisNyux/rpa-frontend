import BackButton from "@/components/SharedComponents/BackButton/BackButton"
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink"

async function Codex() {


  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8 flex flex-col items-center lg:items-start">
      <div className="w-full">
      <BackButton href="/" text="На главную" />
      </div>
      <h2 className="mt-6 mb-6 w-full">Устав РПА</h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl w-full">
      На данной странице вы можете ознакомиться с уставом РПА
      </span>
      <div className="w-1/2 mt-6 lg:w-full">
      <RoundSquareLink linkTitle="Устав" url={`${process.env.API_URL}/uploads/Ustav_RPA_5bb09f0cf5.pdf`} ></RoundSquareLink>
      </div>
    </div>
  )
}

export default Codex