import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from './service/user.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
    ,MatToolbarModule
    ,MatButtonModule
    ,MatIconModule
    ,RouterLink
    ,RouterLink
    ,NgIf
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='a'
  public userService: UserService = UserService.getInstance()

}
