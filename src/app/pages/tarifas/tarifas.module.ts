import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifasRoutingModule } from './tarifas-routing.module';
import { AgregarTarifaComponent } from './agregar-tarifa/agregar-tarifa.component';
import { ConsultarTarifaComponent } from './consultar-tarifa/consultar-tarifa.component';
import { EditarTarifaComponent } from './editar-tarifa/editar-tarifa.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';


@NgModule({
  declarations: [
    AgregarTarifaComponent,
    ConsultarTarifaComponent,
    EditarTarifaComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    TarifasRoutingModule,
    MatPaginatorModule,
    NgxSpinnerModule,
  ]
})
export class TarifasModule { }
