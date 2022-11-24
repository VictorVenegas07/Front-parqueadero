import { Component, OnInit } from '@angular/core';
import { ReqResponseUsuario } from 'src/app/models/user-login';
import { LoginService } from 'src/app/service/login.service';
import { navbarHomeData } from './navbarmenu';
import { UserLog } from '../../models/user-login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario!:UserLog
  constructor(private loginService:LoginService) { 
    loginService.subject.subscribe(x=> this.usuario =x);
  }
  navMenu = navbarHomeData;
  ngOnInit(): void {
  }
  
  obtenerClass(item:any): string{
    return (item === "Inicia sesión")? 'active': '';
  }

  validarSesion(item:any): boolean{
    return (item === "Inicia sesión" && this.usuario != null)? false:true;
  }


}
