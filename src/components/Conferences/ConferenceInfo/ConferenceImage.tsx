import { FC } from "react";
import Image from "next/image";
import { SingleConference } from "@/types/ConferencesType";
import styles from "./ConferenceInfo.module.css";
import getFullImageUrl from "@/lib/getFullImageUrl";

interface ConferenceImageProps {
  conference: SingleConference;
}

const ConferenceImage: FC<ConferenceImageProps> = ({ conference }) => {
  const images = conference.attributes.promoImage.data;

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={styles.section}>
      <div className={styles.imagesContainer}>
        {images.map((image, index) => (
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceImage;
