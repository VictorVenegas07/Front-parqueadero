import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosRoutingModule } from './puestos-routing.module';
import { ConsultarPuestoComponent } from './consultar-puesto/consultar-puesto.component';
import { AgregarPuestoComponent } from './agregar-puesto/agregar-puesto.component';
import { EditarPuestoComponent } from './editar-puesto/editar-puesto.component';


@NgModule({
  declarations: [
    ConsultarPuestoComponent,
    AgregarPuestoComponent,
    EditarPuestoComponent
  ],
  imports: [
    CommonModule,
    PuestosRoutingModule
  ]
})
export class PuestosModule { }
