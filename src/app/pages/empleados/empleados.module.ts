import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ConsultarEmpleadoComponent } from './consultar-empleado/consultar-empleado.component';


@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ConsultarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
