import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosRoutingModule } from './puestos-routing.module';
import { ConsultarPuestoComponent } from './consultar-puesto/consultar-puesto.component';
import { AgregarPuestoComponent } from './agregar-puesto/agregar-puesto.component';
import { EditarPuestoComponent } from './editar-puesto/editar-puesto.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    ConsultarPuestoComponent,
    AgregarPuestoComponent,
    EditarPuestoComponent,
  ],
  imports: [
    CommonModule,
    PuestosRoutingModule,
    SharedModuleModule
  ]
})
export class PuestosModule { }
