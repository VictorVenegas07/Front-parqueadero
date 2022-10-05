import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoPageComponent } from './contenido-page/contenido-page.component';

const routes: Routes = [
  {path: 'inicio', component:ContenidoPageComponent },
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
