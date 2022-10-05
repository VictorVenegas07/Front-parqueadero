import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { EditarReservaComponent } from './editar-reserva/editar-reserva.component';
import { ConsultarReservaComponent } from './consultar-reserva/consultar-reserva.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';


@NgModule({
  declarations: [
    EditarReservaComponent,
    ConsultarReservaComponent,
    AgregarReservaComponent,
],
  imports: [
    CommonModule,
    ReservasRoutingModule
  ]
})
export class ReservasModule { }
