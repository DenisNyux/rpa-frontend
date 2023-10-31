import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";
import getAllOtherDocuments from "@/api/documents/getAllOtherDocuments";
import { DocumentCategories } from "@/types/DocumentsType";
import removeExtension from "@/lib/removeExtension";

async function Payment() {
  const documentsData: Promise<DocumentCategories> = getAllOtherDocuments();
  const documentCategories = await documentsData;

  const documents = documentCategories.data[0].attributes.relatedDocs.data;

  return (
    <div className="my-8 mx-16 lg:mx-6 lg:my-8">
      <BackButton href="/" text="На главную" />
      <h2 className="mt-6 mb-6">Оплатить членский взнос</h2>
      <span className="text-base flex flex-col gap-3 lg:text-xl">
        На данной странице вы можете оплатить членский взнос. Вам необходимо
        указать сумму платежа в рублях. 
      </span>
      <span className="text-base flex flex-col gap-3 pt-6 lg:text-xl">
        <p>Из <a className="text-[#5e050d]" href={`${process.env.API_URL}/uploads/Ustav_RPA_5bb09f0cf5.pdf`}>устава</a> РПА</p>
        <i>Члены Организации обязаны уплачивать вступительный взнос, членские взносы, целевые и дополнительные взносы, установленные настоящим Уставом и решениями руководящих органов Организации;</i>
      </span>
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
    </div>
  );
}

export default Payment;
