import { ProjectionModel } from "./movie.model"


export interface UserModel {
    
    name: string
    surname: string
    email: string
    password: string 
    adress: string
    phone: number
    date_of_birth: number
    favoriteTypeOfMovie: string
    cart:CartModel
}

export interface CartModel {
    sum_of_tickets: number
    all_tickets: ticket[]
}

export interface ticket{
    user?: UserModel
    projection: ProjectionModel
    status:'reserved' | 'watched' | 'cancelled'
    movieName?: string;        
    movieGenre?: string;       
    movieDirector?: string;    
    movieDescription?: string; 
    movieActors?: string[];    
    movieImageUrl?: string
}