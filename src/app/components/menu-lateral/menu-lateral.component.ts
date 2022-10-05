import { Component, OnInit } from '@angular/core';
interface alternarNavelateral{
  ancho: number,
  colapsar: boolean,
}
@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navegaciónLateralcolapsada = false;
  anchoPantalla = 0;
  altenarNav(data: alternarNavelateral): void{
    this.anchoPantalla = data.ancho;
    this.navegaciónLateralcolapsada = data.colapsar;
  }

}
