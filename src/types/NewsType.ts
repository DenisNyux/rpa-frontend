import { MediaType } from "./DocumentsType";

export type SingleNews = {
  id: number;
  attributes: {
    newsTitle: string;
    newsContent: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    newsSlug: string;
    pubDate: string;
    rubrick: {
      data: Rubrick;
    };
    newsImage: {
      data: MediaType;
    };
  };
};

export type Rubrick = {
  id: number;
  attributes: {
    rubTitle: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type NewsType = {
  data: SingleNews[];
};

export type RubricsType = {
  data: Rubrick[];
};
