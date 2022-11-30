import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarData } from '../sidenav/nav-data';
import { LoginService } from '../../service/login.service';
import { Empleado } from '../../models/req-empleados';
import { UserLog } from 'src/app/models/user-login';
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
  navData = NavBarData;
  result: any = [];
  paginasEmpleado =  ['Dashboard','Clientes','Vehiculos','Reservas', 'Tickets']
  opened = false;
 empleado!: UserLog;
  constructor(private router: Router, private loginService: LoginService) {
    this.ancho = window.innerWidth;
   }

  ngOnInit(): void {
    this.empleado = this.loginService.subject.value
  }
  cerrarSidenav(evento:any): void{
    this.colapsar = false;
    this.altenarNav.emit({ancho:this.ancho, colapsar:this.colapsar})
  }
  alterar():void{
    this.colapsar = !this.colapsar;
    this.altenarNav.emit({ancho:this.ancho, colapsar:this.colapsar})
  }

validaComponents(item:NavBarData): boolean{
  if(this.empleado.cargo ==="Empleado"){
    return this.paginasEmpleado.includes(item.pagina);
  }
  return true;
}

   toggleSidebar() {
    this.opened = !this.opened;
  }

  logout(){
    this.loginService.closSession();
  }
}
