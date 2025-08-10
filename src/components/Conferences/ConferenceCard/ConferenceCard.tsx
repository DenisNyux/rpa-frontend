import Link from "next/link";
import { SingleConference } from "@/types/ConferencesType";
import { layout, spacing, typography, colors, interactive, cards } from "@/styles/tailwindClasses";
import cutStringByWords from "@/lib/cutStringByWords";
import dayjs from "dayjs";

type ConferenceCardProps = {
  conference: SingleConference;
  conferenceType: 'upcoming' | 'past';
};

function ConferenceCard({ conference, conferenceType }: ConferenceCardProps) {
  const { attributes } = conference;
  
  return (
    <Link 
      href={`/conferences/${attributes.conferenceSlug}`}
      className={`${layout.flexCol} ${spacing.gap3} ${spacing.p6} ${cards.card} ${interactive.defaultShadow} ${interactive.clickableAnimation} ${layout.fullWidth}`}
    >
      {/* Тип конференции */}
      <span className={`${typography.textSm} ${colors.primary} ${typography.fontBold} ${typography.uppercase}`}>
        {conferenceType === 'upcoming' ? 'Предстоящая' : 'Прошедшая'}
      </span>
      
      {/* Заголовок */}
      <h3 className={`${typography.h4} ${typography.fontBold} ${colors.primary}`}>
        {attributes.title}
      </h3>
      
      {/* Описание */}
      {/* <p className={`${typography.textBase} ${spacing.gap2}`}>
        {attributes.conferenceDescription[0].text.length > 150 
          ? `${attributes.conferenceDescription.slice(0, 150)}...` 
          : attributes.conferenceDescription
        }
      </p> */}
      
      {/* Дата и место */}
      <div className={`${layout.flexCol} ${spacing.gap2}`}>
        <span className={`${typography.textSm} ${colors.primary} ${typography.fontBold}`}>
          📅 {dayjs(attributes.conferenceDateStart).format('DD.MM.YYYY')}
        </span>
        <span className={`${typography.textSm} ${colors.primary} ${typography.fontBold}`}>
          📍 {attributes.conferenceLocation}
        </span>
      </div>
      
      {/* Кнопка действия */}
      <div className={`${spacing.mt6} [&_h4]:text-[#5E050D]`}>
        <div className={`${interactive.buttonPrimary} ${typography.textCenter} ${spacing.p4} ${typography.fontBold}`}>
          {conferenceType === 'upcoming' ? 'Подробнее' : 'Материалы'}
        </div>
      </div>
    </Link>
  );
}

export default ConferenceCard; 