import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      *{
        color: rgba(255,255,255, 0.80)
      }

      .logotype {
        padding: 10px;
        text-align: left;
        height: 80px;
        width: 90px;
      }

      p, a {
        position: relative;
      }

      p {
        top: 25%
      }

      a {
        top: 14%
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
