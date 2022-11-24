import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReservaService } from 'src/app/service/reserva.service';
import { Reserva, ReservaResp } from '../../../models/req-reserva';

@Component({
  selector: 'app-consultar-reserva',
  templateUrl: './consultar-reserva.component.html',
  styleUrls: ['./consultar-reserva.component.css']
})
export class ConsultarReservaComponent implements OnInit {
  reservas:ReservaResp[] = []
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  length = (typeof this.reservas == 'undefined') ? 0 : this.reservas.length;
  constructor(private spinner: NgxSpinnerService, private reservaService: ReservaService, private router:Router) { }

  ngOnInit(): void {
    this.getTicket() 
  }
  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }

  validarAcciones(item:Reserva){
    return (item.estado != 'Pendiente')?true:false;
  }
  consultarDetalle(item:ReservaResp){
    (item.estado == 'Pendiente')?this.router.navigate(['/','sidenav','reservas','detalle','generar',item.reservaId]):this.router.navigate(['/','sidenav','reservas','detalle',item.reservaId])
  }

  getTicket() {
    this.spinner.show();
    this.reservaService.getReservas().subscribe(req => {
      setTimeout(() => {
        console.log(req)
        this.reservas = req.reverse()
        this.length = this.reservas.length;
        this.spinner.hide();
      }, 500);

    });
  }
}
