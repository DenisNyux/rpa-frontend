"use client";
import { useState } from "react";
import { SingleConference } from "@/types/ConferencesType";
import { getConferenceType } from "@/lib/separateConferences";
import dayjs from "dayjs";
import RoundSquareLink from "@/components/SharedComponents/RoundSquareLink/RoundSquareLink";
import ConferenceRegistrationModal from "@/components/Modals/ConferenceRegistrationModal";
import SpeakersSection from "./SpeakersSection";
import ConferenceMedia from "./ConferenceMedia";
import CollapsibleTextSection from "./CollapsibleTextSection";
import styles from "./ConferenceInfo.module.css";

type ConferenceInfoProps = {
  conference: SingleConference;
  apiUrl: string | undefined;
};

function ConferenceInfo({ conference, apiUrl }: ConferenceInfoProps) {
  const { attributes } = conference;
  const conferenceType = getConferenceType(conference);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Заголовок конференции */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <span className={styles.conferenceType}>
            {conferenceType === "upcoming"
              ? "Предстоящая конференция"
              : "Прошедшая конференция"}
          </span>
          <h1 className={styles.title}>{attributes.title}</h1>

          <div className={styles.metaInfo}>
            {(attributes.conferenceDateStart ||
              attributes.conferenceDateEnd) && (
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>📅</span>
                <span className={styles.metaText}>
                  {attributes.conferenceDateStart &&
                    dayjs(attributes.conferenceDateStart).format("DD.MM.YYYY")}
                  {attributes.conferenceDateStart &&
                    attributes.conferenceDateEnd &&
                    " - "}
                  {attributes.conferenceDateEnd &&
                    dayjs(attributes.conferenceDateEnd).format("DD.MM.YYYY")}
                </span>
              </div>
            )}

            {attributes.conferenceLocation && (
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>📍</span>
                <span className={styles.metaText}>
                  {attributes.conferenceLocation}
                </span>
              </div>
            )}

            {attributes.conferencePrice && (
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>💰</span>
                <span className={styles.metaText}>
                  {attributes.conferencePrice}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Описание конференции */}
      {attributes.description && (
        <CollapsibleTextSection
          title="О конференции"
          content={attributes.description}
          isInitiallyExpanded={false}
        />
      )}

      {/* Программа конференции */}
      {attributes.conferenceProgram && (
        <CollapsibleTextSection
          title="Программа конференции"
          content={attributes.conferenceProgram}
          isInitiallyExpanded={false}
        />
      )}

      {/* Дополнительная информация */}
      {attributes.additionalInfo && (
        <CollapsibleTextSection
          title="Дополнительная информация"
          content={attributes.additionalInfo}
          isInitiallyExpanded={false}
        />
      )}

      {/* Условия участия */}
      {attributes.participationConditions && (
        <CollapsibleTextSection
          title="Условия участия"
          content={attributes.participationConditions}
          isInitiallyExpanded={false}
        />
      )}

      {/* Медиа-файлы конференции */}
      <ConferenceMedia conference={conference} apiUrl={apiUrl} />

      {/* Спикеры */}
      <SpeakersSection speakers={attributes.speakersAtConference} />

      {/* Кнопки действий */}

      {attributes.disableRegistration && (
        <div className={styles.registrationClosed}>
          Регистрация откроется в ближайшее время. Пожалуйста, свяжитесь с нами
          для получения дополнительной информации.
        </div>
      )}
      {!attributes.disableRegistration && (
        <div className={styles.actions}>
          {conferenceType === "upcoming" ? (
            <button
              onClick={() => setIsRegistrationModalOpen(true)}
              className={styles.actionButton}
            >
              Зарегистрироваться
            </button>
          ) : (
            <RoundSquareLink
              linkTitle="📄 Материалы конференции"
              url="#"
              className={`${styles.actionButton} ${styles.secondaryButton}`}
            />
          )}
        </div>
      )}

      {/* Модальное окно регистрации */}
      <ConferenceRegistrationModal
        open={isRegistrationModalOpen}
        setOpen={setIsRegistrationModalOpen}
        conference={conference}
      />
    </div>
  );
}

export default ConferenceInfo;
