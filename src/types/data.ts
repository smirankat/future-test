export interface Book {
  etag: string;
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
    description?: string;
  };
}

export type totalItems = string;
