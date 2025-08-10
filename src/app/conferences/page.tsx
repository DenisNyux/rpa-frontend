import BackButton from "@/components/SharedComponents/BackButton/BackButton";
import { layout, spacing, typography, responsive, colors } from "@/styles/tailwindClasses";
import ConferenceCard from "@/components/Conferences/ConferenceCard/ConferenceCard";
import { SingleConference } from "@/types/ConferencesType";
import getAllConferences from "@/requests/conferences/getAllConferences";
import dayjs from "dayjs";
import { separateConferences } from "@/lib/separateConferences";


async function Conferences() {
  const conferences = await getAllConferences();
  

  const { upcomingConferences, pastConferences } = separateConferences(conferences.data);


  return (
    <div className={layout.pageContainerCentered}>
      <div className={layout.fullWidth}>
        <BackButton href="/" text="На главную" />
      </div>
      <h2 className={`${spacing.mt6} ${spacing.mb6} ${layout.fullWidth}`}>Конференции РПА</h2>
      <span className={`${typography.textBase} ${layout.flexCol} ${spacing.gap3} ${responsive.tablet.textXl} ${layout.fullWidth} ${spacing.mb6}`}>
        На данной странице представлены предстоящие и прошедшие конференции Российского психоаналитического общества. 
        Участие в конференциях открыто для членов РПА и приглашенных специалистов.
      </span>
      
      {/* Секция предстоящих конференций */}
      {upcomingConferences.length > 0 && (
        <div className={`${layout.fullWidth} ${spacing.my8}`}>
          <h3 className={`${typography.h3} ${spacing.mb4} ${colors.primary}`}>Предстоящие конференции</h3>
          <div className={`${layout.responsiveGrid} ${spacing.mt6}`}>
            {upcomingConferences.map((conference) => (
              <ConferenceCard key={conference.id} conference={conference} conferenceType="upcoming" />
            ))}
          </div>
        </div>
      )}

      {/* Секция прошедших конференций */}
      {pastConferences.length > 0 && (
        <div className={layout.fullWidth}>
          <h3 className={`${typography.h3} ${spacing.mb4} ${colors.primary}`}>Прошедшие конференции</h3>
          <div className={`${layout.responsiveGrid} ${spacing.mt6}`}>
            {pastConferences.map((conference) => (
              <ConferenceCard key={conference.id} conference={conference} conferenceType="past" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Conferences;
