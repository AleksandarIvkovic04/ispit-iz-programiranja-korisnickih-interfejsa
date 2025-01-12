import { Component } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-signup',
  imports: [MatInputModule,FormsModule,MatFormFieldModule,MatCardModule,RouterLink,MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private userService: UserService=UserService.getInstance()
  public email: string =''
  public name: string =''
  public surname: string =''
  public password: string =''
  public phone: number = 0
  public date_of_birth: number = 0
  public confirmPassword: string =''
  public adress: string =''
  public favoriteTypeOfMovie: string =''

  public constructor(private router: Router,private route: ActivatedRoute){
this.userService=UserService.getInstance()

  }

  public updateEmail(e: any){
    this.email=e.target.value
  }

  public updateName(e: any){
    this.name=e.target.value
  }

  public updateSurname(e: any){
    this.surname=e.target.value
  }

  public updatePassword(e: any){
    this.password=e.target.value
  }

  public updatePhone(e: any){
    this.phone=e.target.value
  }

  public updatedate_of_birth(e: any){
    this.date_of_birth=e.target.value
  }

  public updateComfirmPassword(e: any){
    this.confirmPassword=e.target.value
  }

  public updateAdress(e: any){
    this.adress=e.target.value
  }

  public updateFavoriteTypeOfMovie(e: any){
    this.favoriteTypeOfMovie=e.target.value
  }

  public doSingup(){
    if(this.email==''&& this.password=='' && this.confirmPassword=='')
      return

    if(this.password!=this.confirmPassword){
     alert('passwords dont match')
      return
    }

    try{
      this.userService.createUser({
        email: this.email,
        name: this.name,
        surname: this.surname,
        password: this.password,
        adress: this.adress,
        phone: this.phone,
        date_of_birth:this.date_of_birth,
        favoriteTypeOfMovie: this.favoriteTypeOfMovie,
        cart: {
          sum_of_tickets: 0,    
          all_tickets: []
        }
      })
     alert('User created successfully!');
    this.router.navigate(['/login']);
} catch (e: any) {
    alert(e.message || 'Error creating user');
}
  }
  
}