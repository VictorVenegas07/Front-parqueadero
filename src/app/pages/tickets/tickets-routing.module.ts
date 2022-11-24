import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { ConsultarTicketsComponent } from './consultar-tickets/consultar-tickets.component';
import { EditarTicketsComponent } from './editar-tickets/editar-tickets.component';

const routes: Routes = [
  {
    path: '', 
    children:[
      {path: 'agregar-tickets', component: AgregarTicketsComponent},
      {path: 'consultar-tickets', component: ConsultarTicketsComponent},
      {path: 'detalle-tickets/:id', component: EditarTicketsComponent},
      {path: 'detalle-tickets/:gestionar/:idSalida', component: EditarTicketsComponent},
      {path: '**', redirectTo: 'consultar-tickets'},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
