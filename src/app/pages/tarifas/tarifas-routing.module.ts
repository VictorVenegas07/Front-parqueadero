import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTarifaComponent } from './agregar-tarifa/agregar-tarifa.component';
import { ConsultarTarifaComponent } from './consultar-tarifa/consultar-tarifa.component';
import { EditarTarifaComponent } from './editar-tarifa/editar-tarifa.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'agregar-tarifa', component: AgregarTarifaComponent},
      {path: 'consultar-tarifa', component: ConsultarTarifaComponent},
      {path: 'editar-tarifa', component: EditarTarifaComponent},
      {path: '**', redirectTo: 'consultar-tarifa'},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifasRoutingModule { }
