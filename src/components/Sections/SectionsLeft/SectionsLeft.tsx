"use client"
import { FC } from "react";
import Image from "next/image";

import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";

import styles from "./SectionsLeft.module.css";

type SectionsLeftProps = {
  sectionDescription: BlocksContent | null;
};

const SectionsLeft: FC<SectionsLeftProps> = ({ sectionDescription }) => {
  return (
    <div className={styles.sectionsLeft}>
      {sectionDescription && (
        <BlocksRenderer
          content={sectionDescription}
          blocks={{
            image: ({ image }) => {
              return (
                <Image
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.alternativeText || ""}
                  unoptimized={true}
                />
              );
            },
            paragraph: ({children}) => <p className="text-base">{children}</p>,
            list: ({ children, format }) => {
              switch (format) {
                case "unordered":
                  return <ul className="list-disc	ml-8">{children}</ul>;
                case "ordered":
                  return <ol className="list-decimal ml-8">{children}</ol>;
                default:
                  return <p>{children}</p>;
              }
            },
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <span className="italic">{children}</span>,
          }}
        />
      )}
    </div>
  );
};

export default SectionsLeft;
