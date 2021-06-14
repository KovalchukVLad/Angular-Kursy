import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {IPopularMovies} from "../../../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-by-genre',
  templateUrl: './movie-by-genre.component.html',
  styleUrls: ['./movie-by-genre.component.css']
})
export class MovieByGenreComponent implements OnInit {
genre: string;
genreId: number;
movies: IPopularMovies[];
sorting: string = 'vote_count.desc';
page = 1;
year: string = 'false';


  sortControl = new FormControl('sort');
  yearControl :FormControl = new FormControl('',[Validators.min(1980), Validators.max(2021)])


  mySort = new FormGroup({
    sort: this.sortControl,
    year: this.yearControl

  })
  constructor(private moviesService: MoviesService, private activatedRoute :ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.genre = value.genre;
      this.genreId = value.genreId
      this.moviesService.getMoviesByGenre(this.sorting, this.page, this.genreId, this.year).subscribe(value1 => this.movies= value1.results)
    })

  }

  ngOnInit(): void {
  }
  submit() {
    this.sorting =this.mySort?.value.sort;
    this.year = this.mySort?.value.year;
    this.page =1
    this.moviesService.getMoviesByGenre(this.sorting, this.page, this.genreId, this.year).subscribe(value1 => this.movies= value1.results)

  }


  left() {
    if (this.page <= 1){
      this.page = 1
    }
    else {
      this.page -= 1;
    }
    this.moviesService.getMoviesByGenre(this.sorting, this.page, this.genreId, this.year).subscribe(value1 => this.movies= value1.results)
  }

  right() {
    if (this.page >= 10){
      this.page = 10
    }
    else {
      this.page += 1;
    }
    this.moviesService.getMoviesByGenre(this.sorting, this.page, this.genreId, this.year).subscribe(value1 => this.movies= value1.results)

  }
}
