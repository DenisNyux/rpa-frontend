import { FC } from "react";
import { ConferenceSpeaker } from "@/types/ConferencesType";
import styles from "./ConferenceInfo.module.css";
import EmptyState from "./EmptyState";

interface SpeakersSectionProps {
  speakers?: { data: ConferenceSpeaker[] } | null;
}

const SpeakersSection: FC<SpeakersSectionProps> = ({ speakers }) => {
  if (!speakers?.data || speakers.data.length === 0) {
    return (
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Спикеры</h3>
        <EmptyState
          icon="🎤"
          title="Спикеры не указаны"
          description="Информация о спикерах будет добавлена позже"
        />
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Спикеры</h3>
      <div className={styles.speakersGrid}>
        {speakers.data.map((speaker) => (
          <div key={speaker.id} className={styles.speakerCard}>
            <div className={styles.speakerName}>
              {speaker.attributes.speakerName}
            </div>
            {speaker.attributes.degree && (
              <div className={styles.speakerPosition}>
                {speaker.attributes.degree}
              </div>
            )}
            {speaker.attributes.psyField && (
              <div className={styles.speakerPosition}>
                {speaker.attributes.psyField}
              </div>
            )}
            {speaker.attributes.education && (
              <div className={styles.speakerBio}>{speaker.attributes.education}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection; 