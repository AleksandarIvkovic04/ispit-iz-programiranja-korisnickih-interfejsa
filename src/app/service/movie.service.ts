import { Injectable } from '@angular/core';
import { MovieModel, Review } from '../models/movie.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesKey = 'movies'; 

  constructor(private userService: UserService) {
    this.setInitialMovies(); 
  }

  
  setInitialMovies(): void {
    if (!localStorage.getItem('movies')) {
      const initialMovies = [
        { 
          id: 0,
          name: 'The Matrix',
          genre: 'Action',
          date_of_release: '1999-03-31',
          movieDirector: 'The Wachowskis',
          actors: ['Keanu Reeves', 'Laurence Fishburne'],
          duration: 136,
          projection: [
            { price: 12, date: '2025-01-15', movieId: 0 },
            { price: 10, date: '2025-01-16', movieId: 0 }
          ],
          review: [
            { rating: 5, comment: 'Amazing movie!' },
            { rating: 4, comment: 'Great action scenes' }
          ],
          averageRating: 4.5,
          description: 'A hacker discovers the shocking truth about his reality.',
          imageUrl: 'THE_MATRIX.jpg' 
        },
        { 
          id: 1,
          name: 'Inception',
          genre: 'Sci-Fi',
          date_of_release: '2010-07-16',
          movieDirector: 'Christopher Nolan',
          actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
          duration: 148,
          projection: [
            { price: 14, date: '2025-01-17', movieId: 1 },
            { price: 11, date: '2025-01-18', movieId: 1 }
          ],
          review: [
            { rating: 5, comment: 'Mind-blowing!' },
            { rating: 5, comment: 'A masterpiece' }
          ],
          averageRating: 5,
          description: 'A thief infiltrates dreams to steal secrets.',
          imageUrl: 'INCEPTION.jpg' 
        },
        { 
          id: 2,
          name: 'The Dark Knight',
          genre: 'Action',
          date_of_release: '2008-07-18',
          movieDirector: 'Christopher Nolan',
          actors: ['Christian Bale', 'Heath Ledger'],
          duration: 152,
          projection: [
            { price: 13, date: '2025-01-19', movieId: 2 },
            { price: 12, date: '2025-01-20', movieId: 2 }
          ],
          review: [
            { rating: 5, comment: 'A brilliant portrayal of the Joker!' },
            { rating: 5, comment: 'One of the best superhero movies ever.' }
          ],
          averageRating: 5,
          description: 'Batman faces off against the Joker in a war for Gotham.',
          imageUrl: 'THE_DARK_KNIGHT.jpg' 
        },
        { 
          id: 3,
          name: 'Interstellar',
          genre: 'Sci-Fi',
          date_of_release: '2014-11-07',
          movieDirector: 'Christopher Nolan',
          actors: ['Matthew McConaughey', 'Anne Hathaway'],
          duration: 169,
          projection: [
            { price: 15, date: '2025-01-21', movieId: 3 },
            { price: 12, date: '2025-01-22', movieId: 3 }
          ],
          review: [
            { rating: 5, comment: 'A visual and emotional masterpiece.' },
            { rating: 4, comment: 'Great concept but a bit slow at times.' }
          ],
          averageRating: 4.5,
          description: 'A team of explorers travel through a wormhole to ensure humanity\'s survival.',
          imageUrl: 'INTERSTELLAR.jpg' 
        },
        { 
          id: 4,
          name: 'Fight Club',
          genre: 'Drama',
          date_of_release: '1999-10-15',
          movieDirector: 'David Fincher',
          actors: ['Brad Pitt', 'Edward Norton'],
          duration: 139,
          projection: [
            { price: 13, date: '2025-01-23', movieId: 4 },
            { price: 11, date: '2025-01-24', movieId: 4 }
          ],
          review: [
            { rating: 5, comment: 'An unforgettable movie!' },
            { rating: 4, comment: 'Twists and turns that leave you questioning everything.' }
          ],
          averageRating: 4.5,
          description: 'An insomniac office worker forms an underground fight club.',
          imageUrl: 'FIGHT_CLUB.jpg' 
        },
        { 
          id: 5,
          name: 'The Shawshank Redemption',
          genre: 'Drama',
          date_of_release: '1994-09-22',
          movieDirector: 'Frank Darabont',
          actors: ['Tim Robbins', 'Morgan Freeman'],
          duration: 142,
          projection: [
            { price: 12, date: '2025-01-25', movieId: 5 },
            { price: 10, date: '2025-01-26', movieId: 5 }
          ],
          review: [
            { rating: 5, comment: 'A timeless classic.' },
            { rating: 5, comment: 'The story of hope and perseverance.' }
          ],
          averageRating: 5,
          description: 'Two imprisoned men form a lasting friendship during their time in Shawshank prison.',
          imageUrl: 'THE_SHAWSHANK_REDEMPTION.jpg' 
        },
        { 
          id: 6,
          name: 'Gladiator',
          genre: 'Action',
          date_of_release: '2000-05-05',
          movieDirector: 'Ridley Scott',
          actors: ['Russell Crowe', 'Joaquin Phoenix'],
          duration: 155,
          projection: [
            { price: 14, date: '2025-01-27', movieId: 6 },
            { price: 12, date: '2025-01-28', movieId: 6 }
          ],
          review: [
            { rating: 5, comment: 'An epic story of revenge.' },
            { rating: 5, comment: 'Great action sequences and performances.' }
          ],
          averageRating: 5,
          description: 'A betrayed Roman general seeks revenge against the corrupt emperor.',
          imageUrl: 'GLADIATOR.jpg' 
        },
        { 
          id: 7,
          name: 'Pulp Fiction',
          genre: 'Crime',
          date_of_release: '1994-10-14',
          movieDirector: 'Quentin Tarantino',
          actors: ['John Travolta', 'Uma Thurman'],
          duration: 154,
          projection: [
            { price: 13, date: '2025-01-29', movieId: 7 },
            { price: 11, date: '2025-01-30', movieId: 7 }
          ],
          review: [
            { rating: 5, comment: 'A unique and engaging narrative.' },
            { rating: 5, comment: 'The best Tarantino film.' }
          ],
          averageRating: 5,
          description: 'The lives of several characters intertwine in a series of crime-related events.',
          imageUrl: 'PULP_FICTION.jpg' 
        },
        { 
          id: 8,
          name: 'The Godfather',
          genre: 'Crime',
          date_of_release: '1972-03-24',
          movieDirector: 'Francis Ford Coppola',
          actors: ['Marlon Brando', 'Al Pacino'],
          duration: 175,
          projection: [
            { price: 16, date: '2025-01-31', movieId: 8 },
            { price: 14, date: '2025-02-01', movieId: 8 }
          ],
          review: [
            { rating: 5, comment: 'The greatest movie of all time.' },
            { rating: 5, comment: 'A cinematic masterpiece.' }
          ],
          averageRating: 5,
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          imageUrl: 'THE_GODFATHER.jpg' 
        },
        { 
          id: 9,
          name: 'The Social Network',
          genre: 'Drama',
          date_of_release: '2010-10-01',
          movieDirector: 'David Fincher',
          actors: ['Jesse Eisenberg', 'Andrew Garfield'],
          duration: 120,
          projection: [
            { price: 12, date: '2025-02-02', movieId: 9 },
            { price: 10, date: '2025-02-03', movieId: 9 }
          ],
          review: [
            { rating: 5, comment: 'A brilliant look into the creation of Facebook.' },
            { rating: 4, comment: 'Well-paced and incredibly engaging.' }
          ],
          averageRating: 4.5,
          description: 'The story of the founding of Facebook and the legal battles that followed.',
          imageUrl: 'THE_SOCIAL_NETWORK.jpg' 
        }
      ];
      localStorage.setItem('movies', JSON.stringify(initialMovies));
    }
  }
  

  
  private retrieveAllMovies(): MovieModel[] {
    const json = localStorage.getItem(this.moviesKey);
    return json ? JSON.parse(json) : [];
  }

  getMovieById(id: number): MovieModel | undefined {
    const movies = this.retrieveAllMovies();
    return movies.find((movie) => movie.id == id);
  }

  getMovieByName(name: string): MovieModel | undefined {
    const movies = this.retrieveAllMovies();
    return movies.find((movie) => movie.name.toLowerCase() === name.toLowerCase());
  }

  
  searchMovies(filters: {
    name?: string;
    genre?: string;
    date_of_release?: string;
    movieDirector?: string;
    actors?: string;
    duration?: number | null;
    averageRating?: number | null;
    projectionDate?: string;
    price?: number | null;
  }): MovieModel[] {
    const movies = this.retrieveAllMovies(); 
    return movies.filter(
      (movie) =>
        (!filters.name ||
          movie.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.genre || movie.genre === filters.genre) &&
        (!filters.date_of_release ||
          movie.date_of_release === filters.date_of_release) &&
        (!filters.movieDirector ||
          movie.movieDirector
            .toLowerCase()
            .includes(filters.movieDirector.toLowerCase())) &&
        (!filters.actors ||
          movie.actors.some((actor) =>
            actor.toLowerCase().includes(filters.actors!.toLowerCase())
          )) &&
        (filters.duration === null || movie.duration === filters.duration) &&
        (filters.averageRating == null ||
          (movie.averageRating != null &&
            movie.averageRating >= filters.averageRating)) &&
        (!filters.projectionDate ||
          movie.projection.some((proj) => proj.date === filters.projectionDate)) &&
        (filters.price === null ||
          movie.projection.some((proj) => proj.price === filters.price))
    );
  }


}