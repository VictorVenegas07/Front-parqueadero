import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { NgChartsModule } from 'ng2-charts';
import { GraficoLinealComponent } from './grafico-lineal/grafico-lineal.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';



@NgModule({
  declarations: [
    EstadisticasComponent,
    GraficoLinealComponent,
    GraficoDonaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModuleModule,
    NgChartsModule,
  ]
})
export class DashboardModule { }
