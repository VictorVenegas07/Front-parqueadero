import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { HandleErrorsComponent } from './modals/handle-errors/handle-errors.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HandleErrorsComponent,
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
