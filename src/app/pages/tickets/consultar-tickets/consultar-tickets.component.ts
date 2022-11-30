import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { TicketsService } from 'src/app/service/tickets.service';
import { Ticket } from '../../../models/req-tickets';
import { Router } from '@angular/router';
import { Puesto } from 'src/app/models/req-puestos';
import { PuestoService } from 'src/app/service/puesto.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Filter } from 'src/app/models/params';


@Component({
  selector: 'app-consultar-tickets',
  templateUrl: './consultar-tickets.component.html',
  styleUrls: ['./consultar-tickets.component.css']
})
export class ConsultarTicketsComponent implements OnInit {
  tickets: Ticket[] = []
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  length = (typeof this.tickets == 'undefined') ? 0 : this.tickets.length;
  accion: any;
  estados = ['Entrada', 'Salida']
  puestos: Puesto[] = []
  formGroup!: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
     private fb: FormBuilder, 
     private ticketService: TicketsService,
      private router:Router,
      private puestosService: PuestoService,
      ) { }

  ngOnInit(): void {
    this.buildForm();
    this. getTicket() ;
    this.getPuestos();
  }

  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
  getTicket() {
    this.spinner.show();
    this.ticketService.getTickets().subscribe(req => {
      setTimeout(() => {
        console.log(req)
        this.tickets = req.reverse()
        this.length = this.tickets.length;
        this.spinner.hide();
      }, 500);

    });
  }
  validarAcciones(ticket: Ticket){
    return (ticket.estado == 'Entrada')?true:false;
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      identificacion: new FormControl('', [Validators.min(4)]),
      placa: new FormControl(''),
      estado: new FormControl(''),
      fecha: new FormControl(''),
    });
  }
  submited() {
    let filter = new Filter()
    .set('fecha', this.formGroup.controls['fecha'].value)
    .set('identificacion', this.formGroup.controls['identificacion'].value)
    .set("placa", this.formGroup.controls['placa'].value)
    .set('estado', this.formGroup.controls['estado'].value)
    this.ticketService.getFiltroTicket(filter).subscribe(req => {
      setTimeout(() => {
        this.tickets = req.reverse()
        this.length = this.tickets.length;
        this.spinner.hide();
      }, 500);

    });

  }
  class():string{
    return 'example-tooltip-red'
  }

  consultarDetalle(ticket:Ticket){
    (ticket.estado == 'Entrada')?
    this.router.navigate([`/sidenav/tickets/detalle-tickets/gestionar/${ticket.tickedId}`])
    :this.router.navigate(['/','sidenav', 'tickets', 'detalle-tickets', 'gestionar', ticket.tickedId])
  }

  getPuestos() { this.puestosService.getPuestos().subscribe(req => this.puestos = req) }
 
}
