import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { ConsultarTicketsComponent } from './consultar-tickets/consultar-tickets.component';
import { EditarTicketsComponent } from './editar-tickets/editar-tickets.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';



@NgModule({
  declarations: [
    AgregarTicketsComponent,
    ConsultarTicketsComponent,
    EditarTicketsComponent,
    PaginatePipe

  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MatPaginatorModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade-rotating' }),
  ]
})
export class TicketsModule { }
