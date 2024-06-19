export interface Movie {
    id: number;
    name: string;
    poster: { previewUrl: string; url: string};
    rating: { kp: number };
    year: string;
    genres: { name: string }[];
    description: string;
  }
  