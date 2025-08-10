import { SingleConference } from "@/types/ConferencesType";
import dayjs from "dayjs";

export function separateConferences(conferences: SingleConference[]) {
    const upcomingConferences = conferences.filter(c => dayjs(c.attributes.conferenceDateStart).isAfter(dayjs()));
    const pastConferences = conferences.filter(c => dayjs(c.attributes.conferenceDateStart).isBefore(dayjs()));

    return { upcomingConferences, pastConferences };
}


export function getConferenceType(conference: SingleConference): 'upcoming' | 'past' {
    if (dayjs(conference.attributes.conferenceDateStart).isAfter(dayjs())) {
        return 'upcoming';
    } else {
        return 'past';
    }
}