import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';

const roustes : Routes = [
      {path: 'login-in', component: LoginInComponent},
      {path: '**', redirectTo: 'login-in'}
]

@NgModule({
  imports: [RouterModule.forChild(roustes)],
  exports: [RouterModule]
  
})
export class LoginRoutingModule { }
