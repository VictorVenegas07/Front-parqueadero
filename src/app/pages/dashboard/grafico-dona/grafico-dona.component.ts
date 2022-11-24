import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { DashboardService } from 'src/app/service/dashboard.service';
import { VehiculoService } from '../../../service/vehiculo.service';
import { VehiculosMasUsados } from '../../../models/req-dashboard';
import { map } from 'rxjs';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  vehiculosUsados:VehiculosMasUsados[] = []

  constructor(private  vehiculosService:DashboardService) { }

  ngOnInit(): void {
    this.obtenerVehiculo()
  }
   obtenerVehiculo(){
    this.vehiculosService.getVehiculosMasUsados().subscribe(resp=>{ this.vehiculosUsados = resp; })
  
  }
  doughnutChartData(){
    return  {
      labels: this.vehiculosUsados.map((v:VehiculosMasUsados)=> v.tipo),
      datasets: [ 
        { 
        data: this.vehiculosUsados.map((v:VehiculosMasUsados)=> v.cantidad),
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(60, 179, 113)'
        ]
      }],
      
    }
   
  }
  public doughnutChartType: ChartType = 'pie';
}
