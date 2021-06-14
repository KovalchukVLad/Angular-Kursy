import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './component/movies/movies.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies.service";
import { MovieComponent } from './component/movie/movie.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import {CustomInterceptorService} from "../../services/custom-interceptor.service";
import { MovieByGenreComponent } from './component/movie-by-genre/movie-by-genre.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    MovieByGenreComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[MoviesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    }]
})
export class MoviesModule { }
