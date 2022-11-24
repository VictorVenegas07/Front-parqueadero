import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Vehiculo } from '../../../models/req-vehiculo';

@Component({
  selector: 'app-consultar-vehiculo',
  templateUrl: './consultar-vehiculo.component.html',
  styleUrls: ['./consultar-vehiculo.component.css']
})
export class ConsultarVehiculoComponent implements OnInit {
  vehiculos_: Vehiculo[] = []
  length = (typeof this.vehiculos_ == 'undefined') ? 0 : this.vehiculos_.length;
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  constructor(private vehiculoService: VehiculoService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.getVehiculos()
    this.getExterno()
  }

  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
  getExterno(){
    this.vehiculoService.getVehiculoE().subscribe(res => console.log(res))
  }

  getVehiculos() {
    this.spinner.show();
    this.vehiculoService.getVehiculos().subscribe(req => {
      setTimeout(() => {
        this.vehiculos_ = req
        this.length = this.vehiculos_.length
        this.spinner.hide();
      }, 500);

    });
  }
}

export const vehiculos = [
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'Mazda',
    tipovehiculo: 'Auto'
  },
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'AKT',
    tipovehiculo: 'Moto'
  },
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'Chevrolet',
    tipovehiculo: 'Auto'
  },
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'Chevrolet',
    tipovehiculo: 'Auto'
  },
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'Chevrolet',
    tipovehiculo: 'Auto'
  },
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'Chevrolet',
    tipovehiculo: 'Auto'
  },
  {
    placa: 'AAC-212',
    modelo: '2021',
    marca: 'Chevrolet',
    tipovehiculo: 'Auto'
  }
]