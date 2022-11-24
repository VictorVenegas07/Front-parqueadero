import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ConsultarEmpleadoComponent } from './consultar-empleado/consultar-empleado.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ConsultarEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    SharedModuleModule
  ]
})
export class EmpleadosModule { }
