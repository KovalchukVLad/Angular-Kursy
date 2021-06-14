import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./component/movies/movies.component";
import {MovieDetailsComponent} from "./component/movie-details/movie-details.component";
import {MovieByGenreComponent} from "./component/movie-by-genre/movie-by-genre.component";

const routes: Routes = [
  {path: '', component:MoviesComponent},
  {path: ':id', component:MovieDetailsComponent},
  {path: ':genre/:genreId', component: MovieByGenreComponent},
  {path: ':genre/:genreId/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {

}
