import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';


@NgModule({
  declarations: [
    AgregarClienteComponent,
    ConsultarClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
