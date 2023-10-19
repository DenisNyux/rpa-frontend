import Link from "next/link";
import { DocumentCategories } from "@/types/DocumentsType";
import getAllDocumentsByCategory from "@/api/documents/getAllDocumentsByCategory";
import DocumentSection from "@/components/Documents/DocumentSection/DocumentSection";

async function Documents() {

  const documentsData: Promise<DocumentCategories> = getAllDocumentsByCategory();
  const documentCategories = await documentsData;

  return (
    <div className="mt-6 mb-12 mx-36">
      <Link href={"/"} className=" text-[#5E050D] text-base leading-5">← Назад</Link>
      {documentCategories.data.map((documentCategory, index) => {
        return (
          <DocumentSection docCategoryName={documentCategory.attributes.catTitle} catDocs={documentCategory.attributes.relatedDocs.data} key={index}/>
        );
      })}

    </div>
  )
}

export default Documents