import { FC } from "react";
import styles from "./ConferenceInfo.module.css";

interface EmptyStateProps {
  icon: string;
  title: string;
  description?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyStateIcon}>{icon}</div>
      <div className={styles.emptyStateText}>{title}</div>
      {description && (
        <div className={styles.emptyStateSubtext}>{description}</div>
      )}
    </div>
  );
};

export default EmptyState; 