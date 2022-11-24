import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SolicitudReservaComponent } from './reserva-public/solicitud-reserva/solicitud-reserva.component';
import { ConsultarSolicitudReservaComponent } from './reserva-public/consultar-solicitud-reserva/consultar-solicitud-reserva.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SolicitudReservaComponent,
    ConsultarSolicitudReservaComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModuleModule

  ]
})
export class PublicModule { }
