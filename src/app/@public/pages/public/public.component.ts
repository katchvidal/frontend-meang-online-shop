import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/public/auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styles: [
    `
      #main{
          margin-top: 15px;
      }

    `
  ]
})
export class PublicComponent implements OnInit {

  constructor( private authService : AuthService ) { }

  ngOnInit(): void {
    this.authService.verifySession();
  }

}
