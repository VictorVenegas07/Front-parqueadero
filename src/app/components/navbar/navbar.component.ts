import { Component, OnInit } from '@angular/core';
import { ReqResponseUsuario } from 'src/app/models/user-login';
import { LoginService } from 'src/app/service/login.service';
import { navbarHomeData } from '../home/navbarmenu';
import { UserLog } from '../../models/user-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNav = true;
  usuario!: UserLog
  navToggle = document.querySelector(".nav-toggle");
  navMenuu = document.querySelector(".nav-menu");
  constructor(private loginService: LoginService) {
    loginService.subject.subscribe(x => this.usuario = x);
    this.navToggle?.addEventListener("click", () => {
      this.navMenuu?.classList.toggle("nav-menu_visible");

      if (this.navMenuu?.classList.contains("nav-menu_visible")) {
        this.navToggle?.setAttribute("aria-label", "Cerrar menú");
      } else {
        this.navToggle?.setAttribute("aria-label", "Abrir menú");
      }
    });
  }
  navMenu = navbarHomeData;
  ngOnInit(): void {
   
  }
  obtenerClass(item: any): string {
    return (item === "Inicia sesión") ? 'active' : '';
  }

  validarSesion(item: any): boolean {
    return (item === "Inicia sesión" && this.usuario != null) ? false : true;
  }
  validarSubmeu(item: any): boolean {
    return (item.subrutas.length >0) ? false : true
  }
  abrirMenu() {
    this.showNav = !this.showNav
  }


}
