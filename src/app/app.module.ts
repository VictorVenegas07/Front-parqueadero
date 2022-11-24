import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HomeComponent } from './components/home/home.component';
import { LoginInComponent } from './pages/login/login-in/login-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HandleErrorsComponent } from './components/modals/handle-errors/handle-errors.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModuleModule } from './shared-module/shared-module.module';
import { ToastNoAnimationModule, ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    MenuLateralComponent,
    // HomeComponent,
    // LoginInComponent,
    HandleErrorsComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    SharedModuleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: ErrorStateMatcher, 
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
