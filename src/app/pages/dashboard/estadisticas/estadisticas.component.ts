import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../../service/dashboard.service';
import { Productividad } from '../../../models/req-dashboard';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  productividad: Productividad = {
    cantidad: 0,
    totalProducido: 0,
    horasServicio: 0,
    producidoAnterior: 0,
    horasServicioAnterior: 0,
    crecimiento: 0
  };
  cantidad = 0;
  constructor(private productividadService: DashboardService) {
  
  }

  ngOnInit(): void {
    this.obtnerProductividad()
  }

  obtnerProductividad() {
    this.productividadService.getProductividad().subscribe(resp => {
      this.productividad = resp;
    })
  }


}



