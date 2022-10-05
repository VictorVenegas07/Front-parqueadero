import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { NavBarMenuComponent } from './components/nav-bar-menu/nav-bar-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { ComponentesRoutingModule } from './components/componentes-routing.module';
import { LoginInComponent } from './pages/login/login-in/login-in.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    MenuLateralComponent,
    HomeComponent,
    LoginInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
