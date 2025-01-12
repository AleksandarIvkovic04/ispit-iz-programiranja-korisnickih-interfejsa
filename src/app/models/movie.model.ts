export interface MovieModel{
    id: number
    name: string
    genre: string
    date_of_release: string
    movieDirector: string
    actors: string[]
    duration: number
    length: number
    projection: ProjectionModel[]
    review: Review[]
    averageRating?: number
    description: string
    imageUrl: string
}

export interface ProjectionModel{
    price:number
    date: string
    movieId: number
}

export interface Review{
 
    rating: number
    comment: string
}