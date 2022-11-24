import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Reserva, ReservaResp } from 'src/app/models/req-reserva';
import { Tarifa } from 'src/app/models/req-tarifa';
import { RepTicket } from 'src/app/models/req-tickets';
import { LoginService } from 'src/app/service/login.service';
import { ReservaService } from 'src/app/service/reserva.service';
import { TarifaService } from 'src/app/service/tarifa.service';
import { TicketsService } from 'src/app/service/tickets.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent implements OnInit {

  tdocumentos = ['CC', 'TI', 'CE']
  formGroup!: FormGroup;
  tarifas: Tarifa[] = []
  anio: string[] = [];
  id:any
  back = '/'
  reserva!:ReservaResp
  title =  'Detalle'
  editValue:Boolean = false
  bandera: boolean  = false;
  gestion: boolean  = false;
  style: string = '';




  constructor(
    private route: ActivatedRoute,
     private fb: FormBuilder, 
     private tarifaService: TarifaService,
     private reservaService:ReservaService,
     private spinner: NgxSpinnerService,
     private loginService:LoginService) {
    this.buildForm();

   }

  ngOnInit(): void {
    this.getTarifa();
    this.ComboAno();
    this.configInitial();
  }
  private configInitial() {
   
    this.route.paramMap.subscribe(params => {
      let solicitd = params.has('solicitud')
      this.style = (solicitd)?'content-reserva':'';
      this.back = (solicitd)?'/solicitar/reserva':'/sidenav/reservas/consultar-reserva'
      this.gestion = params.has('generar');
      if (this.gestion) {
        this.getDetalle();
      } else {
        let idticket = (this.route.snapshot.paramMap.get('id')|| "");
        this.obtenerTicket(idticket);
      }
    });
  }

  private getDetalle(){
    let idSalida = (this.route.snapshot.paramMap.get('idreserva')|| "");
    (idSalida != "")?this.obtenerTicket(idSalida):null
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
  private obtenerTicket(id:string){
    this.reservaService.getReservaId(id).subscribe(response =>
      {
        this.reserva = response
        console.log(response)
        this.bandera = (this.reserva.estado == 'Pendiente' && this.gestion )?true:false
        this.title = (!this.bandera)?'Detalle/reserva':'Generar/ticket/reserva';
        this.editValue = this.bandera;
        this.setValues();
      }
    )
  }
  generarfactura(){
    this.reservaService.posGenerarTicket({
      reservaId: this.reserva.reservaId,
      vehiculoId: this.reserva.vehiculo.vehiculoId,
      clienteId: this.reserva.cliente.clienteId,
      puestoId: this.reserva.puesto.puestoId,
      empleadoId: this.loginService.subject.value.empleado.empleadoId

    }).subscribe(
      res =>{
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    )
  }
  private setValues() {

    this.formGroup.controls['tDocumento'].setValue(this.reserva.cliente.tipoDocumuento)
    this.formGroup.controls['identificacion'].setValue( this.reserva.cliente.identificacion)
    this.formGroup.controls['nombres'].setValue( this.reserva.cliente.nombre)
    this.formGroup.controls['telefono'].setValue( this.reserva.cliente.telefono)
    this.formGroup.controls['tVehiculo'].setValue( this.reserva.vehiculo.tipo)
    this.formGroup.controls['modelo'].setValue( this.reserva.vehiculo.modelo)
    this.formGroup.controls['placa'].setValue( this.reserva.vehiculo.placa)
    this.formGroup.controls['marca'].setValue( this.reserva.vehiculo.marca)
    this.formGroup.controls['puesto'].setValue( this.reserva.puesto.codigoPuesto)
    this.formGroup.controls['estado'].setValue( this.reserva.estado)
    this.formGroup.controls['hllegada'].setValue( this.reserva.fechaHora)
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
