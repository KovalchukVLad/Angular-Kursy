import {Component, Input, OnInit} from '@angular/core';
import {IPopularMovies} from "../../../../models";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input()
movie: IPopularMovies;
  url =  'https://www.themoviedb.org/t/p/w220_and_h330_face';
  constructor() { }

  ngOnInit(): void {
  }

}
