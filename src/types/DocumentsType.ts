export type MediaType = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null | undefined;
    caption: string | null | undefined;
    width: number | null | undefined;
    height: number | null | undefined;
    formats: number | null | undefined;
    hash: string;
    ext: string;
    mime: string;
    size: number | null | undefined;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
};

export type DocumentObjectType = {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      docTitle: string;
      mainDocument: {
        data: MediaType;
      };
      documentAttachments: {
        data: MediaType[];
      };
    };
};

export type DocumentCategories = {
  data: DocumentCategory[];
};

export type DocumentCategory = {
  id: number;
  attributes: {
    catTitle: string;
    createdAt: string;
    updatedAt: string;
    relatedDocs: {
      data: DocumentObjectType[];
    };
  };
};
