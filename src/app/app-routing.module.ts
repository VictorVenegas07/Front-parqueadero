import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { LoginInComponent } from './pages/login/login-in/login-in.component';

const routes: Routes = [
  {
    path: 'sidenav',
    component: MenuLateralComponent,
    children:  [
      {
        path: 'empleados',
        loadChildren: () => import('./pages/empleados/empleados.module').then(m=> m.EmpleadosModule)
        
      }
    ]
  },
  {path: 'login',component: LoginInComponent},
   {path: 'home',component: HomeComponent},
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
