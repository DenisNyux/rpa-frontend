import React from 'react';
import Link from 'next/link';
import { layout, spacing, typography, colors, interactive, utilities } from "@/styles/tailwindClasses";
import ConferenceInfo from "@/components/Conferences/ConferenceInfo/ConferenceInfo";
import getSingleConference from "@/requests/conferences/getSingleConference";


type SingleConferencePageProps = {
  params: {
    conferenceSlug: string;
  };
};

async function SingleConferencePage({ params }: SingleConferencePageProps) {
  // В реальном приложении здесь будет запрос к API
  const conferenceData = await getSingleConference(params.conferenceSlug);
  const conference = conferenceData.data[0];
  const apiUrl = process.env.API_URL;

  return (
    <div className={layout.pageContainer}>
      {/* Кнопка "Назад" */}
      <div className={`${layout.flexCol} ${spacing.gap6}`}>
        <Link 
          href="/conferences" 
          className={`${colors.primary} ${typography.textBase} ${utilities.maxWMax}`}
        >
          ← Назад к конференциям
        </Link>

        {/* Основная информация о конференции */}
        <ConferenceInfo conference={conference} apiUrl={apiUrl} />
      </div>
    </div>
  );
}

export default SingleConferencePage; 