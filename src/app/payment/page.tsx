import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";
import getAllOtherDocuments from "@/requests/documents/getAllOtherDocuments";
import { DocumentCategories } from "@/types/DocumentsType";
import removeExtension from "@/lib/removeExtension";
import PaymentForm from "@/components/Payment/PaymentForm";


async function Payment() {
  const documentsData: Promise<DocumentCategories> = getAllOtherDocuments();
  const documentCategories = await documentsData;

  const documents = documentCategories.data[0].attributes.relatedDocs.data;

  const robokassaLogin = process.env.ROBOKASSA_LOGIN
  const robokassaPassword = process.env.ROBOKASSA_PASSWORD

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6">Оплатить членский взнос</h2>
      <span className="text-xl flex flex-col gap-3 lg:text-xl">
        На данной странице вы можете оплатить членский взнос. Вам необходимо
        указать сумму платежа в рублях. Сумма разового вступительного взноса - 1 000 рублей. Сумма ежегодного членского взноса – 2 000 рублей.
      </span>
     

      <PaymentForm merchantId={robokassaLogin} merchantPassword={robokassaPassword}></PaymentForm>
      
      <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-1 ">
        {documents.map((document, index) => {
          return (
            <RoundSquareLink
              key={index}
              linkTitle={removeExtension(
                document.attributes.mainDocument.data.attributes.name
              )}
              url={`${process.env.API_URL}${document.attributes.mainDocument.data.attributes.url}`}
            ></RoundSquareLink>
          );
        })}
        </div>
      <div className="mt-6">
      <span className="text-base flex flex-col gap-3 pt-6 text-xl">
        <p>Из <a className="text-[#5e050d]" href={`${process.env.API_URL}/uploads/Ustav_RPA_5bb09f0cf5.pdf`}>устава</a> РПА</p>
        <i>Члены Организации обязаны уплачивать вступительный взнос, членские взносы, целевые и дополнительные взносы, установленные настоящим Уставом и решениями руководящих органов Организации;</i>
      </span>
      </div>
    </div>
  );
}

export default Payment;
