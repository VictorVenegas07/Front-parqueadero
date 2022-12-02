import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';

const routes: Routes = [
      {path: 'agregar-cliente', component: AgregarClienteComponent},
      {path: 'consultar-cliente', component: ConsultarClienteComponent},
      {path: 'editar-cliente/:id', component: EditarClienteComponent},
      {path: '**', redirectTo: 'consultar-cliente'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
