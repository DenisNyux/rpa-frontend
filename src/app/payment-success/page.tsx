import BackButton from "@/components/SharedComponents/BackButton/BackButton"
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink"

async function PaymentSuccess() {


  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8 flex flex-col items-center lg:items-start">
      <div className="w-full">
      <BackButton href="/" text="На главную" />
      </div>
      <h2 className="mt-6 mb-6 w-full">Оплата успешно прошла</h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl w-full">
        Ваш платеж успешно прошел. Благодарим Вас за оплату членского взноса! 
      </span>
      <div className="w-1/2 mt-6 lg:w-full">
      <RoundSquareLink linkTitle="На главную" url={`/`} ></RoundSquareLink>
      </div>
    </div>
  )
}

export default PaymentSuccess
