import BackButton from "@/components/SharedComponents/BackButton/BackButton"
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink"

async function Join() {


  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6"></h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl">
        На этой странице вы можете заполнить форму для того чтобы попасть в РПА, здесь также представлена форма для членов РПА, желающих оказаться на сайте в разделе "Члены РПА"
      </span>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <RoundSquareLink linkTitle="Заполнить форму для вступления в РПА" url="https://forms.gle/bJ34fseY8NN6SiLM9" />
          <RoundSquareLink linkTitle="Попасть на сайт РПА" url="https://forms.gle/Br9y3JUL1D5HDwsH7" />
        </div>
    </div>
  )
}

export default Join