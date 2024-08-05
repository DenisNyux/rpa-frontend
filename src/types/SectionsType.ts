import { MediaType } from "./DocumentsType";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { MemberType } from "./MemberType";

export type SingleSection = {
  id: number;
  attributes: {
    sectionTitle: string;
    sectionSlug: string;
    sectionDescription: BlocksContent | null;
    sectionHead: { data: MemberType };
    sectionMembers: { data: MemberType[] };
    sectionCoordinator: { data: MemberType } | null;
    sectionDocuments: { data: MediaType[] };
    estDate: string;
    sectionContacts: string | null;
    sectionLogo: { data: MediaType } | null;
    sectionTabsView: boolean;
    sectionTabs:
      | {
          id: number
          tabTitle: string
          tabContent: BlocksContent | null;
        }[]
      | null;
  };
};

export type SectionsType = {
  data: SingleSection[];
};
