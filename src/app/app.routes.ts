import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CartComponent } from './cart/cart.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {path: 'signup', component: SignupComponent},
    { path: 'profile', component: ProfileComponent },
    {path: 'search', component: SearchComponent},
    {path:'movie/:name',component:MovieDetailsComponent},
    {path:'cart',component:CartComponent},
    { path: '**', redirectTo: '' }
];
