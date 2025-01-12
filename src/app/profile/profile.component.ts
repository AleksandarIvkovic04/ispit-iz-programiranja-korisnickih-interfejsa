import {   CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { ticket, UserModel } from '../models/user.model';
import {MatListModule} from '@angular/material/list'
@Component({
  selector: 'app-profile',
  imports: [MatCardModule,MatButtonModule,NgIf,MatListModule,CommonModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  public userService: UserService
  public active: UserModel | null = null
  public tickets: ticket[] = []

  constructor(private router: Router, private route: ActivatedRoute){
    this.userService= UserService.getInstance()
  }
  ngOnInit(): void {
    try{
      this.active=this.userService.getCurrentUser()
      this.tickets = this.active.cart?.all_tickets || [];
    }catch(e){
      alert(e)
      this.router.navigate(['/login'],{relativeTo: this.route
      })
    }
  }
   
  public getAvatarURL(){

    return 'https://ui-avatars.com/api/?name=' + (this.active?.name +'+'+ this.active?.surname)

  }

  public doLogout(){
    this.userService.logout()
    this.router.navigate(['/Home'])

  }
}