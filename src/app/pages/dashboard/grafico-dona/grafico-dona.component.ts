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

  constructor(private  vehiculosService:DashboardService) {
    this.obtenerVehiculo()

   }

  ngOnInit(): void {
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
        backgroundColor: this.random_rgba()
      }],
      
    }
   
  }
  public doughnutChartType: ChartType = 'pie';

 random_rgba():string[] {
  let colors:string[]= [];
  this.vehiculosUsados.forEach(x=>{
    var o = Math.round, r = Math.random, s = 255;
    colors.push('rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')');
  })
  return colors;
}
}
