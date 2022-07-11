import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
