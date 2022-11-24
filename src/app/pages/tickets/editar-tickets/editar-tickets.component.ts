import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tarifa } from 'src/app/models/req-tarifa';
import { RepTicket } from 'src/app/models/req-tickets';
import { TarifaService } from 'src/app/service/tarifa.service';
import { TicketsService } from '../../../service/tickets.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-editar-tickets',
  templateUrl: './editar-tickets.component.html',
  styleUrls: ['./editar-tickets.component.css']
})
export class EditarTicketsComponent implements OnInit {
  tdocumentos = ['CC', 'TI', 'CE']
  formGroup!: FormGroup;
  tarifas: Tarifa[] = []
  anio: string[] = [];
  id:any
  ticket!:RepTicket
  title =  'Detalle'
  editValue:Boolean = false
  bandera: boolean  = false;
  gestion: boolean  = false;
  constructor(
    private route: ActivatedRoute,
     private fb: FormBuilder, 
     private tarifaService: TarifaService,
     private tikectService:TicketsService,
     private spinner: NgxSpinnerService) {
    this.buildForm();
   }
  ngOnInit(): void {
    this.getTarifa();
    this.ComboAno();
    this.configInitial();
  }
  private configInitial() {
    this.route.paramMap.subscribe(params => {
      this.gestion = params.has('gestionar');
      if (this.gestion) {
        this.getDetalle();
      } else {
        let idticket = this.route.snapshot.paramMap.get('id');
        this.obtenerTicket(idticket || '');
      }
    });
  }

  private getDetalle(){
    let idSalida = this.route.snapshot.paramMap.get('idSalida');
    (idSalida != null)?this.obtenerTicket(idSalida):null
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      tDocumento: new FormControl(''),
      identificacion: new FormControl(''),
      nombres: new FormControl(''),
      telefono: new FormControl(''),
      tVehiculo: new FormControl(''),
      modelo: new FormControl(''),
      placa: new FormControl(''),
      marca: new FormControl(''),
      puesto: new FormControl(''),
      estado: new FormControl(''),
      hllegada: new FormControl(''),
      total: new FormControl(''),
      
    });
  }
  private getTarifa() { this.tarifaService.getTarifas().subscribe(req => this.tarifas = req)}
  get puesto(){
    return ( this.formGroup.controls['estado'].value == 'Entrada')?true: false
  }
  get control(){
    return this.formGroup.controls
  }
  get tieneTotal(){
    return ( this.formGroup.controls['total'].value != 0)?true : false;
  }
  private obtenerTicket(id:string){
    this.tikectService.getTicketId(id).subscribe(response =>
      {
        this.ticket = response
        this.bandera = (this.ticket.estado == 'Entrada' && this.gestion )?true:false
        this.title = (!this.bandera)?'Detalle':'Generar';
        this.editValue = this.bandera;
        this.setValues();
      }
    )
  }
  generarfactura(){
    this.tikectService.getSalidTicketId(this.ticket.tickedId).subscribe(
      res =>{
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    )
  }
  private setValues() {
    this.formGroup.controls['tDocumento'].setValue(this.ticket.cliente.tipoDocumuento)
    this.formGroup.controls['identificacion'].setValue( this.ticket.cliente.identificacion)
    this.formGroup.controls['nombres'].setValue( this.ticket.cliente.nombre)
    this.formGroup.controls['telefono'].setValue( this.ticket.cliente.telefono)
    this.formGroup.controls['tVehiculo'].setValue( this.ticket.vehiculo.tipo)
    this.formGroup.controls['modelo'].setValue( this.ticket.vehiculo.modelo)
    this.formGroup.controls['placa'].setValue( this.ticket.vehiculo.placa)
    this.formGroup.controls['marca'].setValue( this.ticket.vehiculo.marca)
    this.formGroup.controls['puesto'].setValue( this.ticket.puesto.codigoPuesto)
    this.formGroup.controls['estado'].setValue( this.ticket.estado)
    this.formGroup.controls['hllegada'].setValue( this.ticket.horaDeEntrada)
    this.formGroup.controls['total'].setValue( this.ticket.total)
    this.setdisable()
  }

  private setdisable() {
    this.formGroup.controls['tDocumento'].disable()
    this.formGroup.controls['identificacion'].disable()
    this.formGroup.controls['nombres'].disable()
    this.formGroup.controls['telefono'].disable()
    this.formGroup.controls['tVehiculo'].disable()
    this.formGroup.controls['modelo'].disable()
    this.formGroup.controls['placa'].disable()
    this.formGroup.controls['marca'].disable()
    this.formGroup.controls['puesto'].disable()
        console.log(this.formGroup.controls)
  }

  private ComboAno() {
    let año = []
    for (var i = 1900; i <= 2021; i++) {
      año.push(i.toString());
    }
    this.anio = año.reverse()
  }

}
