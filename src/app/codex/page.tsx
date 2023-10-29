import BackButton from "@/components/SharedComponents/BackButton/BackButton"

async function Codex() {


  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6">Устав РПА</h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl">
      </span>
    </div>
  )
}

export default Codex