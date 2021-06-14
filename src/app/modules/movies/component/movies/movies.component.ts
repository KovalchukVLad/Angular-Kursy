import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {IPopularMovies} from "../../../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IPopularMovies[];
  sorting: string = 'vote_count.desc';
  page : number = 1 ;
  year: string = 'false';

  sortControl = new FormControl('sort');
  yearControl :FormControl = new FormControl('',[Validators.min(1980), Validators.max(2021)])


  mySort = new FormGroup({
    sort: this.sortControl,
    year: this.yearControl
  })

  constructor( private moviesService :MoviesService) {
    this.moviesService.getMovies(this.sorting, this.page, this.year).subscribe(value => this.movies = value.results);
  }

  ngOnInit(): void {

  }

  submit() {
    this.sorting =this.mySort?.value.sort;
    this.year = this.mySort?.value.year;
    this.page =1
    this.moviesService.getMovies(this.sorting, this.page, this.year).subscribe(value => this.movies = value.results);
  }


  left() {
    if (this.page <= 1){
      this.page = 1
    }
    else {
      this.page -= 1;
    }
    this.moviesService.getMovies(this.sorting, this.page, this.year).subscribe(value => this.movies = value.results);
  }

  right() {
    if (this.page >= 10){
      this.page = 10
    }
    else {
      this.page += 1;
    }
    this.moviesService.getMovies(this.sorting, this.page, this.year).subscribe(value => this.movies = value.results);
  }

  alert() {
    alert(22);
  }
}
