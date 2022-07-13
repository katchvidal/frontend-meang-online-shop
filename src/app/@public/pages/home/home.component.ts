import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/public/auth.service';
import { UsersService } from '@core/services/public/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService, private userService: UsersService ) { }

  ngOnInit(): void {
    // this.authService.signIn( 'kia@correo.com', '123456').subscribe( res => console.log( res ))
    // this.authService.getMe().subscribe( res => console.log( res ))
    // this.userService.getUsers().subscribe( res => console.log( res ))
  }

}
