import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseSignIn, ISignIn } from '@core/interfaces/signin.interfaces';
import { AuthService } from '@core/services/public/auth.service';
import { basicAlert } from '@shared/alerts/toast';
import { TYPE_ALERT } from '@shared/alerts/values.config';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  signIn: ISignIn = {
    email: '',
    password: ''
  }

  ReExpEmail: string = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  ReExpPassword: string = "^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$"

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.verifySession();
  }

  onSubmit(f: NgForm) {
    this.authService.signIn(this.signIn.email, this.signIn.password)
      .subscribe((res: IResponseSignIn) => {
        // console.log(res)
        if (res.status !== null && res.token !== null) {
          this.authService.setSession(res.token!, 24, res.user)
          this.authService.updateSession(res)
          basicAlert(TYPE_ALERT.SUCCESS, 'Sign in Success');
          setTimeout(() => {
            this.router.navigate(['/home'])
          }, 1200);
          return;
        }
        basicAlert(TYPE_ALERT.ERROR, 'Something Went Wrong Email & Password Incorrect Please Verify')
      })

  }

}


