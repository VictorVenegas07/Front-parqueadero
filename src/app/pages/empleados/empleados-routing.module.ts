import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ConsultarEmpleadoComponent } from './consultar-empleado/consultar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'editar_empleado', component: EditarEmpleadoComponent},
      {path: 'agregar_empleado', component: AgregarEmpleadoComponent},
      {path: 'consultar_empleado', component: ConsultarEmpleadoComponent},
      {path: 'detalle-empleado/:id', component: EditarEmpleadoComponent},
      {path: '**', redirectTo: 'consultar_empleado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
