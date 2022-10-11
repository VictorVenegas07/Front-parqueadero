import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginInComponent } from './pages/login/login-in/login-in.component';
import { TarifasModule } from './pages/tarifas/tarifas.module';

const routes: Routes = [
  {
    path: 'sidenav',
    component: MenuLateralComponent,
    canActivate: [AuthGuard],
    children:  [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m=> m.DashboardModule)
      },
      {
        path: 'empleados',
        loadChildren: () => import('./pages/empleados/empleados.module').then(m=> m.EmpleadosModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./pages/clientes/clientes.module').then(m=> m.ClientesModule)
      },
      {
        path: 'vehiculos',
        loadChildren: () => import('./pages/vehiculos/vehiculos.module').then(m=> m.VehiculosModule)
      },
      {
        path: 'reservas',
        loadChildren: () => import('./pages/reservas/reservas.module').then(m=> m.ReservasModule)
      },  {
        path: 'tickets',
        loadChildren: () => import('./pages/tickets/tickets.module').then(m=> m.TicketsModule)
      },  {
        path: 'puestos',
        loadChildren: () => import('./pages/puestos/puestos.module').then(m=> m.PuestosModule)
      },  {
        path: 'tarifa',
        loadChildren: () => import('./pages/tarifas/tarifas.module').then(m=> m.TarifasModule)
      },{
      path: '', 
      redirectTo: 'dashboard', 
      pathMatch: 'full'
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
