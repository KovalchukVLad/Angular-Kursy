import {Component, Input, OnInit} from '@angular/core';
import {IPopularMovies} from "../../models";

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
@Input()
movie: IPopularMovies;
  url =  'https://www.themoviedb.org/t/p/w220_and_h330_face';
  constructor() { }

  ngOnInit(): void {
  }

}
