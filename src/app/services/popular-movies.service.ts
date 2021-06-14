import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPopularMoviesObj} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {
  pop_movies_url = 'https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1'

  constructor(private httpClient: HttpClient) { }

  getPopMovies():Observable<IPopularMoviesObj>{
    return this.httpClient.get<IPopularMoviesObj>(this.pop_movies_url);
  }
}

