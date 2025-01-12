import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel, ProjectionModel } from '../models/movie.model';
import { MovieService } from '../service/movie.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ticket } from '../models/user.model';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-movie-details',
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieModel | undefined;
  selectedProjection: ProjectionModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private userService: UserService,  
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieName = this.route.snapshot.paramMap.get('name');
    if (movieName) {
      this.movie = this.movieService.getMovieByName(movieName);
    }
  }

  
  buyTicket(): void {
    if (!this.userService.hasCurrentUser()) {
        alert('You need to log in before buying a ticket. Redirecting to signup...');
        this.router.navigate(['/signup']);
        return;
    }

    if (this.selectedProjection) {
        const newTicket: ticket = {
            projection: this.selectedProjection,
            status: 'reserved',
        };

        this.userService.addTicketToCart(newTicket);

        alert('Projection reserved and added to your cart!');
    } else {
        alert('Please select a projection!');
    }
}
}



  
