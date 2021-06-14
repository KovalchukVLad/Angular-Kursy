import {Routes} from "@angular/router";
import {HeaderComponent} from "../components/header/header.component";
import {PopularMoviesComponent} from "../components/popular-movies/popular-movies.component";

export let routes: Routes = [
  {path: '', component: PopularMoviesComponent},
  {path: 'movies', loadChildren:()=>import('../modules/movies/movies.module').then(m=>m.MoviesModule)},
]
