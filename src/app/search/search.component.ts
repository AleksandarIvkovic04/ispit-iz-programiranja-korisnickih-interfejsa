import { Component } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MovieService } from '../service/movie.service';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule,NgFor,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  filters = {
    name: '',
    genre: '',
    date_of_release: '',
    movieDirector: '',
    actors: '',
    duration: null as number | null,
    averageRating: null as number | null,
    projectionDate: '',
    price: null as number | null
  }
  

  movies: MovieModel[] = []; 

  constructor(private movieService: MovieService) {}

  searchMovies(): void {
    this.movies = this.movieService.searchMovies(this.filters);
  }
}

