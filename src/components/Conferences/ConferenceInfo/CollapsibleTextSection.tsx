import { FC, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import styles from "./ConferenceInfo.module.css";

interface CollapsibleTextSectionProps {
  title: string;
  content: BlocksContent;
  isInitiallyExpanded?: boolean;
  previewLines?: number; // Количество строк для предварительного просмотра
}

const CollapsibleTextSection: FC<CollapsibleTextSectionProps> = ({
  title,
  content,
  isInitiallyExpanded = false,
  previewLines = 10,
}) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const renderContent = (content: BlocksContent, isPreview: boolean = false) => {
    return (
      <div className={`${styles.content} ${isPreview ? styles.previewContentInner : ""}`}>
        <BlocksRenderer
          content={content}
          blocks={{
            image: ({ image }) => {
              // В превью не показываем изображения
              if (isPreview) return null;
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
            paragraph: ({ children }) => (
              <p>{children}</p>
            ),
            list: ({ children, format }) => {
              // В превью показываем только первые элементы списка
              if (isPreview) {
                const limitedChildren = Array.isArray(children) 
                  ? children.slice(0, 4) 
                  : children;
                switch (format) {
                  case "unordered":
                    return <ul>{limitedChildren}</ul>;
                  case "ordered":
                    return <ol>{limitedChildren}</ol>;
                  default:
                    return <p>{limitedChildren}</p>;
                }
              }
              
              switch (format) {
                case "unordered":
                  return <ul>{children}</ul>;
                case "ordered":
                  return <ol>{children}</ol>;
                default:
                  return <p>{children}</p>;
              }
            },
            heading: ({ children, level }) => {
              const Tag = `h${level}` as keyof JSX.IntrinsicElements;
              return <Tag>{children}</Tag>;
            },
            quote: ({ children }) => (
              <blockquote>{children}</blockquote>
            ),
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <em>{children}</em>,
            underline: ({ children }) => <u>{children}</u>,
            strikethrough: ({ children }) => <s>{children}</s>,
          }}
        />
      </div>
    );
  };

  return (
    <div className={`${styles.section} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.expandButton}
          aria-expanded={isExpanded}
        >
          <span className={styles.expandButtonText}>
            {isExpanded ? "Свернуть" : "Развернуть"}
          </span>
          <span className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ""}`}>
            ▼
          </span>
        </button>
      </div>
      
      {/* Превью контента (видимо только когда свернуто) */}
      {!isExpanded && (
        <div className={styles.previewContent}>
          {renderContent(content, true)}
        </div>
      )}
      
      {/* Полный контент (видимо только когда развернуто) */}
      {isExpanded && (
        <div className={styles.collapsibleContent}>
          {renderContent(content, false)}
        </div>
      )}
    </div>
  );
};

export default CollapsibleTextSection; 