import { Component, OnInit } from '@angular/core';
import {GenresService} from "../../services/genres.service";
import {PopularMoviesService} from "../../services/popular-movies.service";
import {IPopularMovies, IGenre} from "../../models";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
genres: IGenre[];

  checkControl = new FormControl
  myCheck = new FormGroup({
    check: this.checkControl
  })

  constructor(private genresService :GenresService, private popularMoviesService: PopularMoviesService) {
    this.genresService.getGenres().subscribe(value => this.genres = value.genres)
  }


  ngOnInit(): void {

  }

  change() {
    if (this.checkControl.value.check === true){

    }
    else {
      console.log(this.checkControl.value.check)
    }
  }
}
