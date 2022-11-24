import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';
import { ConsultarReservaComponent } from './consultar-reserva/consultar-reserva.component';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';

const routes: Routes = [
{
  path: '',
  children:[
    {path: 'agregar-reserva', component: AgregarReservaComponent},
    {path: 'consultar-reserva', component: ConsultarReservaComponent},
    {path: 'detalle/:id', component: EditarReservaComponent},
    {path: 'detalle/:generar/:idreserva', component: EditarReservaComponent},
    {path: '**', redirectTo: 'consultar-reserva'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
