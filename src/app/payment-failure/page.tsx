import BackButton from "@/components/SharedComponents/BackButton/BackButton"
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink"

async function PaymentFailure() {


  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8 flex flex-col items-center lg:items-start">
      <div className="w-full">
      <BackButton href="/" text="На главную" />
      </div>
      <h2 className="mt-6 mb-6 w-full">Ошибка оплаты</h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl w-full">
        Возникла ошибка при оплате членского взноса. Пожалуйста, повторите попытку позднее.  
      </span>
      <div className=" mt-6 flex gap-6 mt-6 w-full">
      <RoundSquareLink linkTitle="На главную" url={`/`} ></RoundSquareLink>
      <RoundSquareLink linkTitle="Попробовать снова" url={`/payment`} ></RoundSquareLink>
      </div>
    </div>
  )
}

export default PaymentFailure
