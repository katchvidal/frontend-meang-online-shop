import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .fa-brands, fa-angular{
        
        font-size: large;
        border-color: transparent;
        color: #181f2c !important;
      }

      .shadow{
        -webkit-box-shadow: -4px 26px 10px 3px rgba(0,0,0,0.75);
        -moz-box-shadow: -4px 26px 10px 3px rgba(0,0,0,0.75);
        box-shadow: -4px 26px 10px 3px rgba(0,0,0,0.75);
      }
    `
  ]
})
export class HeaderComponent {
  toogleValue = true;

  @Output() booleanToogle = new EventEmitter<boolean>();

  booleanEventClick() {
    if (this.toogleValue === undefined) this.toogleValue = true; // Si esta undefined asignale true
    this.toogleValue = !this.toogleValue  //  Evento click modifica el valor del toogle 
    // console.log( this.toogleValue );
    this.booleanToogle.emit(this.toogleValue);  //  Emite el valor del componente hijo al padre
  }

}
