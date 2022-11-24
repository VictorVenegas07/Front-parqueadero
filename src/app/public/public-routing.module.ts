import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudReservaComponent } from './reserva-public/solicitud-reserva/solicitud-reserva.component';
import { ConsultarSolicitudReservaComponent } from './reserva-public/consultar-solicitud-reserva/consultar-solicitud-reserva.component';
import { EditarReservaComponent } from '../pages/reservas/editar-reserva/editar-reserva.component';

const routes: Routes = [
  {
    path:'reserva', component: SolicitudReservaComponent
  },
  {
    path: 'consulta/reservas', component: ConsultarSolicitudReservaComponent
  },
  {
    path: 'detalle/reserva/:solicitud/:id', component: EditarReservaComponent
  },
  {
    path: '**', redirectTo: 'reserva'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
