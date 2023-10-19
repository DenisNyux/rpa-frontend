import { MemberType } from "./MemberType";

export type DepartmentData = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    depTitle: string;
    coat: {
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
    headOfDep: {data: MemberType};
    members: {data: MemberType[]};
  };
};

export type DepartmentsData = {
  data: DepartmentData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
