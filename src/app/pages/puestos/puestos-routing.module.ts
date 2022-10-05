import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPuestoComponent } from './agregar-puesto/agregar-puesto.component';
import { ConsultarPuestoComponent } from './consultar-puesto/consultar-puesto.component';
import { EditarPuestoComponent } from './editar-puesto/editar-puesto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar-puesto', component: AgregarPuestoComponent },
      { path: 'consultar-puesto', component: ConsultarPuestoComponent },
      { path: 'editar-puesto', component: EditarPuestoComponent },
      {path: '**', redirectTo: 'consultar-puesto'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestosRoutingModule { }
