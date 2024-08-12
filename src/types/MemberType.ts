import { SingleSection } from "./SectionsType";

export type MemberType = {
      id: number;
      attributes: {
        name: string;
        education: string | null | undefined;
        contact: string | null | undefined;
        createdAt: string;
        updatedAt: string;
        workPlace: string | null | undefined;
        specialization: string | null | undefined;
        degree: string | null | undefined;
        therapyType: string | null | undefined;
        slug: string;
        headOfSection?: {
          data: SingleSection | null
        }
        avatar: {
          data: {
            id: number;
            attributes: {
              name: string;
              alternativeText: string | null | undefined;
              caption: string | null | undefined;
              width: number;
              height: number;
              formats: string | null | undefined;
              hash: string;
              ext: string;
              mime: string;
              size: number;
              url: string;
              previewUrl: string | null | undefined;
              provider: string | null | undefined;
              provider_metadata: string | null | undefined;
              createdAt: string;
              updatedAt: string;
            };
          };
        };
      };
    }