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
  
  date1: Date | undefined ;

  date2: Date | undefined ;

  date3: Date | undefined ;
  value : Date | undefined;
  date4: Date | undefined ;

  date5: Date | undefined;

  date6: Date | undefined;

  date7: Date | undefined;

  date8: Date | undefined;

  date9: Date | undefined;

  date10: Date | undefined;

  date11: Date | undefined;

  date12: Date | undefined ;

  date13: Date | undefined;

  date14: Date | undefined;

  dates: Date[] | undefined;

  rangeDates: Date[] | undefined;

  minDate: Date | undefined ;

  maxDate: Date | undefined ;

  invalidDates: Array<Date> | undefined
  
  constructor( private authService: AuthService, private userService: UsersService ) { }

  ngOnInit(): void {
    this.authService.signIn( 'kia@correo.com', '123456').subscribe( res => console.log( res ))
    this.authService.getMe().subscribe( res => console.log( res ))
    this.userService.getUsers().subscribe( res => console.log( res ))
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];

  }

  enviar(){
    console.log( this.date3 )
  }

}
