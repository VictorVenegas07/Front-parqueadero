import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from '../sidenav/nav-data';
interface alternarNavelateral{
  ancho: number,
  colapsar: boolean,
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() altenarNav: EventEmitter <alternarNavelateral> = new EventEmitter()
  colapsar = false;
  ancho = 0
  navData = navbarData;
  result: any = [];
  
  opened = false;
  constructor(private router: Router) {
    this.ancho = window.innerWidth;
    this.router.navigate(["/clientes/consultar-cliente"]);
   }

  ngOnInit(): void {
  }
  cerrarSidenav(evento:any): void{
    this.colapsar = false;
    this.altenarNav.emit({ancho:this.ancho, colapsar:this.colapsar})
  }
  alterar():void{
    this.colapsar = !this.colapsar;
    this.altenarNav.emit({ancho:this.ancho, colapsar:this.colapsar})
  }



   toggleSidebar() {
    this.opened = !this.opened;
  }
}
