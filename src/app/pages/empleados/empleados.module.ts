import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ConsultarEmpleadoComponent } from './consultar-empleado/consultar-empleado.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';


@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ConsultarEmpleadoComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    MatPaginatorModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade-rotating' }),
  ]
})
export class EmpleadosModule { }
