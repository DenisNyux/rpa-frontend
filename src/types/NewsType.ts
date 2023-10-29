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
    rubrick: {
      data: Rubrick;
    };
    newsImage: {
      data: MediaType;
    };
  };
};

export type Rubrick = {
  id: 1;
  attributes: {
    rubTitle: "Новости РПА";
    createdAt: "2023-08-03T14:36:49.096Z";
    updatedAt: "2023-08-03T14:36:50.809Z";
  };
};

export type NewsType = {
  data: SingleNews[];
};

export type RubricsType = {
  data: Rubrick[];
};
