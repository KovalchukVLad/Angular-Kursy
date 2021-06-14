import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenresObj} from "../models";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
genres_url = 'https://api.themoviedb.org/3/genre/movie/list?&language=en-US'
  constructor(private httpClient: HttpClient) {
  }

  getGenres():Observable<IGenresObj>{
    return this.httpClient.get<IGenresObj>(this.genres_url);
  }
}
