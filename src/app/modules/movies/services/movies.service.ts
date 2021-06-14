import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPopularMovies, IPopularMoviesObj} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private url1 = 'https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by='
private url2 = '&with_watch_monetization_types=flatrate'

private urlForMovieById1 = 'https://api.themoviedb.org/3/movie/'

private urlForMoviesByGenre = 'https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate'
  constructor(private httpClient :HttpClient) {}
  getMovies(sorting: string, page: number, year: string):Observable<IPopularMoviesObj>{
    return this.httpClient.get<IPopularMoviesObj>(this.url1 + sorting +'&page='+page+this.url2+'&year='+year);
  }
  getMovieById(id:number):Observable<IPopularMovies>{
  return this.httpClient.get<IPopularMovies>(this.urlForMovieById1+ id+'?&language=en-US');
  }
  getMoviesByGenre(sorting: string, page: number,  idGenre:number, year: string):Observable<IPopularMoviesObj>{
  return this.httpClient.get<IPopularMoviesObj>(this.url1+sorting+'&page='+page+'&with_genres='+idGenre+this.url2+'&year='+year)
  }
}
