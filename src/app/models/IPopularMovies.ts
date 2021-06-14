import {IGenre} from "./IGenre";

export interface IPopularMovies {
  id: number;
  title: string;
  poster_path: string;
  popularity: string;

  budget?: number;
  genres?: IGenre[];
  overview?: string;
  production_companies?: any[];
  release_date?: string;
  runtime?: number;
  vote_average?: number;

  backdrop_path?: string;
  homepage?: string;


}
