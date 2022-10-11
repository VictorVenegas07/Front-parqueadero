import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInComponent } from './login-in/login-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [
    LoginInComponent,
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModuleModule
  ]
})
export class LoginModule { }
