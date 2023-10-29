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
      aboutRpaTextAfterButtons: string | null | undefined
      aboutRpaTextBeforeButtons: string | null | undefined
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

export type CoordinationalComiteeDataResponse = {
  data: {
    id: number;
    attributes: {
      rpaMembers: {
        data: MemberType[]
      }
      coordAdditionalText: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}


export type SupervisorsCommitteeDataResponse = {
  data: {
    id: number;
    attributes: {
      rpaMembers: {
        data: MemberType[]
      }
      supervisorsComAdditionalText: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}

export type RevisionCommitteeDataResponse = {
  data: {
    id: number;
    attributes: {
      rpaMembers: {
        data: MemberType[]
      }
      revisionAdditionalText: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}

export type SupervisorsDataResponse = {
  data: {
    id: number;
    attributes: {
      rpaMembers: {
        data: MemberType[]
      }
      supervisorsAdditionalText: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}


export type EhticalComitteeDataResponse = {
  data: {
    id: number;
    attributes: {
      rpaMembers: {
        data: MemberType[]
      }
      ethicalAdditionalText: string | null | undefined
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
    };
  };
  meta: {};
}