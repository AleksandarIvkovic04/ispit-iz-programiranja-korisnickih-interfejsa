import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { ticket } from '../models/user.model';
import { MovieService } from '../service/movie.service';
import { UserService } from '../service/user.service';
import {MatListModule} from '@angular/material/list'
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
@Component({
  selector: 'app-cart',
  imports: [MatListModule,CommonModule,MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: ticket[] = []; 
  movies: MovieModel[] = []; 
 
  constructor(private userService: UserService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadCartItems(); 
  }

  loadCartItems(): void {
    const cart = this.userService.getUserCart();
    if (cart && cart.all_tickets) {
        this.cartItems = cart.all_tickets;

        
        this.cartItems.forEach((ticket) => {
            const movie = this.movieService.getMovieById(ticket.projection.movieId!);
            if (movie) {
                
                ticket.movieName = movie.name;
                ticket.movieGenre = movie.genre;
                ticket.movieDirector = movie.movieDirector;
                ticket.movieDescription = movie.description;
                ticket.movieActors = movie.actors;
                ticket.movieImageUrl = movie.imageUrl
            }
        });
    }
}




  cancelTicket(ticket: ticket): void {
    
    this.userService.cancelTicket(ticket);

    
    this.loadCartItems();
  }
  
  
  
}
