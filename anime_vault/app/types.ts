export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface AnimeDetail {
  id: number;
  name: string;
  russian: string;
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: string;
  episodes_aired: number;
  aired_on: string | null;
  released_on: string | null;
  rating: string;
  duration: number;
  description: string;
  description_html: string;
  franchise: string | null;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  myanimelist_id: number;
  updated_at: string;
  next_episode_at: string | null;

  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };

  english: string[];
  japanese: string[];
  synonyms: string[];

  genres: Genre[];
  studios: Studio[];
  videos: Video[];
  screenshots: Screenshot[];

  rates_scores_stats: RateStat[];
  rates_statuses_stats: RateStat[];

  fansubbers: string[];
  fandubbers: string[];
  licensors: string[];

  user_rate: null;
};

export type Genre = {
  id: number;
  name: string;
  russian: string;
  kind: string;
  entry_type: string;
};

export type Studio = {
  id: number;
  name: string;
  filtered_name: string;
  real: boolean;
  image: string;
};

export type Video = {
  id: number;
  url: string;
  image_url: string;
  player_url: string;
  name: string;
  kind: string;
  hosting: string;
};

export type Screenshot = {
  original: string;
  preview: string;
};

export type RateStat = {
  name: number | string;
  value: number;
};
