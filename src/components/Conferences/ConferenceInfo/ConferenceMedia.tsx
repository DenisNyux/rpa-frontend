import { FC } from "react";
import Image from "next/image";
import { SingleConference } from "@/types/ConferencesType";
import styles from "./ConferenceInfo.module.css";
import getFullImageUrl from "@/lib/getFullImageUrl";

interface ConferenceMediaProps {
  conference: SingleConference;
  apiUrl: string | undefined;
}

const ConferenceMedia: FC<ConferenceMediaProps> = ({ conference, apiUrl }) => {
  const images = conference.attributes.promoImage.data;
  const documents = conference.attributes.conferenceDocuments?.data || [];
  
  const hasImages = images.length > 0;
  const hasDocuments = documents.length > 0;
  
  if (!hasImages && !hasDocuments) {
    return null;
  }

  const handleDocumentClick = (docItem: any) => {
    const url = `${apiUrl}${docItem.attributes.url}`;
    console.log('Document URL:', url);
    console.log('Document data:', docItem);
    console.log('Document name:', docItem.attributes.name);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = docItem.attributes.name || 'document';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Материалы конференции</h3>
      <div className={styles.imagesContainer}>
        {/* Изображения */}
        {hasImages && images.map((image, index) => (
          <div key={image.id || index} className={styles.imageWrapper}>
            <Image
              src={getFullImageUrl(image.attributes.url, "./member.svg")}
              width={image.attributes.width || 800}
              height={image.attributes.height || 600}
              alt={
                image.attributes.alternativeText ||
                `${conference.attributes.title} - изображение ${index + 1}`
              }
              unoptimized={true}
              className={styles.conferenceImage}
            />
          </div>
        ))}
        
        {/* Документы */}
        {hasDocuments && documents.map((document, index) => (
          <div 
            key={document.id || index} 
            className={styles.imageWrapper}
            onClick={() => handleDocumentClick(document)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.documentWrapper}>
              <div className={styles.documentIcon}>
                <Image
                  src="/document.svg"
                  width={60}
                  height={60}
                  alt="Документ"
                  unoptimized={true}
                  className={styles.documentIconImage}
                />
              </div>
              <div className={styles.documentName}>
                {document.attributes.name || `Документ ${index + 1}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceMedia; 