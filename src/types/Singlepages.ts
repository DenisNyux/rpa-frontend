import { MemberType } from "./MemberType";

export type HomepageTextResponse = {
  data: {
    id: number;
    attributes: {
      mainText: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
      videoLink: string | undefined
    };
  };
  meta: {};
};

export type AboutRpaTextResponse = {
  data: {
    id: number;
    attributes: {
      about_rpa_text_after_buttons: string | null | undefined
      about_rpa_text_before_buttons: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
};

export type PresidentDataResponse = {
  data: {
    id: number;
    attributes: {
      presidentAdditionalText: string | null | undefined
      rpaMembers: {
        data: MemberType
      }
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}

export type VisePresidentDataResponse = {
  data: {
    id: number;
    attributes: {
      rpaMembers: {
        data: MemberType[]
      }
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}

