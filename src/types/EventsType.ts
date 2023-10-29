import { MediaType } from "./DocumentsType";

export type SingleEvent = {
  id: number;
  attributes: {
    eventTitle: string;
    eventDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    eventSlug: string;
    eventMedia: {
      data: MediaType;
    };
  };
};



export type EventsType = {
  data: SingleEvent[];
};


