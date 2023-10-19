import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";
import DocumentCard from "../DocumentCard/DocumentCard";
import { DocumentObjectType } from "@/types/DocumentsType";

type DocumentSectionProps = {
  docCategoryName: string;
  catDocs: DocumentObjectType[] 
};

function DocumentSection({ docCategoryName, catDocs }: DocumentSectionProps) {
    console.log(catDocs)
  return (
    <div className="my-6 ">
      <LineSeparatedHeader
        headerTitle={docCategoryName}
        headerColor="#5e050d"
      />
      <div className="grid grid-cols-2 gap-6">
        {catDocs.map((doc, index) => (
          <DocumentCard mainDocument={doc.attributes.mainDocument.data} attachmentsDocuments={doc.attributes.documentAttachments.data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DocumentSection;
