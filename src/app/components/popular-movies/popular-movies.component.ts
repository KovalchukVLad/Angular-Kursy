import { Component, OnInit } from '@angular/core';
import {PopularMoviesService} from "../../services/popular-movies.service";
import {IPopularMovies} from "../../models";

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movies: IPopularMovies[]

  constructor(private popularMoviesService: PopularMoviesService) {
    this.popularMoviesService.getPopMovies().subscribe(value => this.movies = value.results)

  }

  ngOnInit(): void {
  }

}
