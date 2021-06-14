import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {IPopularMovies} from "../../../../models";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie: IPopularMovies;
  url =  'https://www.themoviedb.org/t/p/w220_and_h330_face';
  constructor(private moviesService: MoviesService, private activatedRoute :ActivatedRoute) {
    this.activatedRoute.params.subscribe(value =>
    {
      this.moviesService.getMovieById(+value.id).subscribe(value => this.movie = value )
    })
  }

  ngOnInit(): void {
  }

}
