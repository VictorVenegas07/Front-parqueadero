import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { ConsultarTicketsComponent } from './consultar-tickets/consultar-tickets.component';
import { EditarTicketsComponent } from './editar-tickets/editar-tickets.component';


@NgModule({
  declarations: [
    AgregarTicketsComponent,
    ConsultarTicketsComponent,
    EditarTicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
