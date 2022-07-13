import { Component, OnInit } from '@angular/core';
import { IAuthMeResponse } from '@core/interfaces/session.interfaces';
import { AuthService } from '@core/services/public/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    ` .custom-bg{
        background-color: #181f2c !important;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  session: IAuthMeResponse = {
    status: false
  }
  name : string = 'Nombre'
  lastname : string = 'Apellido Usuario'
  role : string = ''
  logged : boolean = false
  constructor( private authService : AuthService) {
    this.authService.accessVar$.subscribe(( res ) => { 
      this.session = res;
      this.logged = this.session.status;
      this.role = this.session.user?.role!;
      this.name = this.session.user?.name!;
      this.lastname = this.session.user?.lastname!;
    })
   }

  ngOnInit(): void {

  }

}
