import styles from "./DocumentCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { MediaType } from "@/types/DocumentsType";
import removeExtension from "@/lib/removeExtension";

type DocumentCardProps = {
  mainDocument: MediaType;
  attachmentsDocuments: MediaType[] | null | undefined;
};

function DocumentCard({
  mainDocument,
  attachmentsDocuments,
}: DocumentCardProps) {
  const mainDocumentTitle = mainDocument.attributes.name;

  const attachmentsSection = (attachmentArray: MediaType[]) => {
    return attachmentArray.map((attachment, index) => {
      return (
      <div key={index}>
        <span className={styles.documentCard__attachmentTitle}>Приложение {index+1}</span>
        <div key={index} className={styles.documentCard__attachment}>
          <span>{removeExtension(attachment.attributes.name)}</span>
          <Link href={`${process.env.API_URL}${attachment.attributes.url}`}>
            <Image src="/download.svg" alt="download button" height={24} width={24}/>
          </Link>
        </div>
      </div>);
    });
  };

  
  return (
    <div className={styles.documentCard}>
      <div className={styles.documentCard__mainDocument}>
        <span>{removeExtension(mainDocumentTitle)}</span>
        <Link href={`${process.env.API_URL}${mainDocument.attributes.url}`}>
          <Image src="/download.svg" alt="download button" height={24} width={24}/>
        </Link>
      </div>
      {attachmentsDocuments ? <div className="flex flex-col gap-3 py-3">{attachmentsSection(attachmentsDocuments)}</div> : ""}
    </div>
  );
}

export default DocumentCard;
