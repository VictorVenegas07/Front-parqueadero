import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Filter } from 'src/app/models/params';
import { ReservaService } from 'src/app/service/reserva.service';
import { Reserva, ReservaResp } from '../../../models/req-reserva';

@Component({
  selector: 'app-consultar-reserva',
  templateUrl: './consultar-reserva.component.html',
  styleUrls: ['./consultar-reserva.component.css']
})
export class ConsultarReservaComponent implements OnInit {
  reservas: ReservaResp[] = []
  page_size = 5;
  page_number = 1;
  formGroup!: FormGroup;
  pageSizeOptions = [5, 10, 25, 100]
  estados = ['Entrada', 'Salida']
  length = (typeof this.reservas == 'undefined') ? 0 : this.reservas.length;
  constructor(private spinner: NgxSpinnerService, private reservaService: ReservaService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getTicket();
    this.buildForm();
  }
  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      identificacion: new FormControl('', [Validators.min(4)]),
      placa: new FormControl(''),
      estado: new FormControl(''),
      fecha: new FormControl(''),
    });
  }

  validarAcciones(item: Reserva) {
    return (item.estado != 'Pendiente') ? true : false;
  }
  consultarDetalle(item: ReservaResp) {
    (item.estado == 'Pendiente') ? this.router.navigate(['/', 'sidenav', 'reservas', 'detalle', 'generar', item.reservaId]) : this.router.navigate(['/', 'sidenav', 'reservas', 'detalle', item.reservaId])
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

  submited() {
    debugger
    let filter = new Filter()
      .set('fecha', this.formGroup.controls['fecha'].value)
      .set('identificacion', this.formGroup.controls['identificacion'].value)
      .set("placa", this.formGroup.controls['placa'].value)
      .set('estado', this.formGroup.controls['estado'].value)
    this.reservaService.getFiltroReserva(filter).subscribe(req => {
      setTimeout(() => {
        this.reservas = req.reverse()
        this.length = this.reservas.length;
        this.spinner.hide();
      }, 500);

    });
  }
}
