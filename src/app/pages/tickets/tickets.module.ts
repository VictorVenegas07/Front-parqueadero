import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { ConsultarTicketsComponent } from './consultar-tickets/consultar-tickets.component';
import { EditarTicketsComponent } from './editar-tickets/editar-tickets.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AgregarTicketsComponent,
    ConsultarTicketsComponent,
    EditarTicketsComponent,

  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModuleModule
  ]
})
export class TicketsModule { }
