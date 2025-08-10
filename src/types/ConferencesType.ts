import { MediaType } from "./DocumentsType";
import { MemberType } from "./MemberType";
import { type BlocksContent } from "@strapi/blocks-react-renderer";

export type SingleConference = {
  id: number;
  attributes: {
    title: string;
    description: BlocksContent | null;
    conferenceDateStart: string | null;
    conferenceDateEnd: string | null;
    conferenceLocation: string | null;
    conferencePrice: string | null;
    conferenceSlug: string;
    conferenceProgram: BlocksContent | null;
    speakers?: { data: MemberType[] } | null;
    participationConditions?: BlocksContent | null;
    scheduleText?: BlocksContent | null;
    additionalInfo?: BlocksContent | null;
    speakersAtConference?: any;
    promoImage: {
      data: MediaType[];
    };
    conferenceDocuments?: {
      data: MediaType[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type ConferencesType = {
  data: SingleConference[];
};

export type ConferenceSpeaker = {
  id: number;
  attributes: {
    speakerName: string;
    degree: string | null;
    education: string | null;
    links: string | null;
    psyField: string | null;
    createdAt: string;
    updatedAt: string;
  };
}; 