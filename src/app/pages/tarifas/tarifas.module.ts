import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifasRoutingModule } from './tarifas-routing.module';
import { AgregarTarifaComponent } from './agregar-tarifa/agregar-tarifa.component';
import { ConsultarTarifaComponent } from './consultar-tarifa/consultar-tarifa.component';
import { EditarTarifaComponent } from './editar-tarifa/editar-tarifa.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AgregarTarifaComponent,
    ConsultarTarifaComponent,
    EditarTarifaComponent,
  ],
  imports: [
    CommonModule,
    TarifasRoutingModule,
    SharedModuleModule
  ]
})
export class TarifasModule { }
