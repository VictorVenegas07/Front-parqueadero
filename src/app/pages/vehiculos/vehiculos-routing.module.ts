import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarVehiculoComponent } from './agregar-vehiculo/agregar-vehiculo.component';
import { ConsultarVehiculoComponent } from './consultar-vehiculo/consultar-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'agregar-vehiculo', component: AgregarVehiculoComponent},
      {path: 'consultar-vehiculo', component: ConsultarVehiculoComponent},
      {path: 'editar-vehiculo', component: EditarVehiculoComponent},
      {path: '**', redirectTo: 'consultar-vehiculo'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
