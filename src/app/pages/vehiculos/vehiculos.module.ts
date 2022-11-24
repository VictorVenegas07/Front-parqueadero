import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { AgregarVehiculoComponent } from './agregar-vehiculo/agregar-vehiculo.component';
import { ConsultarVehiculoComponent } from './consultar-vehiculo/consultar-vehiculo.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    EditarVehiculoComponent,
    AgregarVehiculoComponent,
    ConsultarVehiculoComponent,
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    SharedModuleModule
  ]
})
export class VehiculosModule { }
