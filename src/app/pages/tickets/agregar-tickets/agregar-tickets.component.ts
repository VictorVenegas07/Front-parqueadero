import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarifa } from 'src/app/models/req-tarifa';
import { PuestoService } from 'src/app/service/puesto.service';
import { TarifaService } from 'src/app/service/tarifa.service';
import { Puesto } from '../../../models/req-puestos';
import { TicketsService } from 'src/app/service/tickets.service';
import { Posticket, Ticket } from '../../../models/req-tickets';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/service/cliente.service';
import { map, Observable, startWith, finalize } from 'rxjs';
import { Cliente } from '../../../models/req-clientes';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-agregar-tickets',
  templateUrl: './agregar-tickets.component.html',
  styleUrls: ['./agregar-tickets.component.css']
})
export class AgregarTicketsComponent implements OnInit {
  tdocumentos = ['CC', 'TI', 'CE']
  puestoSelect = false;
  puestoName = 'Escoger puesto ';
  puestos: Puesto[] = []
  tarifas: Tarifa[] = []
  anio: string[] = [];
  id: any;
  formGroup!: FormGroup;
  ticket!: Posticket;
  filteredStreets!: Observable<string[]>;
  constructor(
    private puestosService: PuestoService,
    private tarifaService: TarifaService,
    private fb: FormBuilder,
    private ticketService: TicketsService, 
    private router: Router, 
    private toastr: ToastrService,
    private clienteService:ClienteService, 
    private loginService:LoginService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getPuestos();
    this.getTarifa();
    this.ComboAno();
    console.log(this.formGroup)
  }

  private buildForm() {
    this.formGroup = this.fb.group({
      tDocumento: new FormControl('', Validators.required),
      identificacion: new FormControl('', [Validators.required, Validators.min(4)]),
      nombres: new FormControl('', [Validators.required, Validators.min(4)]),
      telefono: new FormControl('', [Validators.required, Validators.min(4)]),
      tVehiculo: new FormControl('', [Validators.required, Validators.min(4)]),
      modelo: new FormControl('', [Validators.required, Validators.min(4)]),
      placa: new FormControl('', [Validators.required, Validators.min(4)]),
      marca: new FormControl('', [Validators.required, Validators.min(4)]),
      puesto: new FormControl('', [Validators.required, Validators.min(2)]),
      empleado: new FormControl('', [Validators.required, Validators.min(2)]),
    });
  }
  submited() {
    this.formGroup.controls['empleado'].setValue(this.loginService.subject.value.empleado.empleadoId)
    if (this.formGroup.invalid) {
      return
    }
    let ticket =  this.crearTarifa();
    this.guardarTicket(ticket)
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!',{
      timeOut: 2000,
    });
  }

  crearTarifa(){
    return {
      cliente: {
        tipoDocumuento: this.contol['tDocumento'].value,
        identificacion: this.contol['identificacion'].value,
        nombre:this.contol['nombres'].value,
        telefono:this.contol['telefono'].value,
      },
      vehiculo:{
        placa: this.contol['placa'].value,
        modelo:this.contol['modelo'].value,
        marca:this.contol['marca'].value,
        tipo:this.contol['tVehiculo'].value
      },
      horaDeEntrada: Date.now,
      empleadoId: this.contol['empleado'].value,
      tarifaId: this.tarifas.find(x=> x.tipo == this.contol['tVehiculo'].value)?.tarifaId,
      puestoId: this.contol['puesto'].value,
      estado: ""
    }
  }

  guardarTicket(ticket:any) {
    // var ticket = Posticket.ticketDesdeObject(this.formGroup)
    this.ticketService.postTickets(ticket).subscribe()
    
  }
  change(event:any){
    console.log(event)
    if(event.length >= 10){
      this.clienteService.getClienteId(event).subscribe(m => { this.setValue(m)})}
    
  }


  setValue(cliente:any){
    console.log(typeof cliente.telefono)
    this.formGroup.controls['tDocumento'].setValue(cliente.tipoDocumuento || '')
    this.formGroup.controls['nombres'].setValue( cliente.nombre  || '')
    this.formGroup.controls['telefono'].setValue( cliente.telefono || '')
  }
  get contol(){
    return  this.formGroup.controls
  }



  setPuesto(item: Puesto, index: any) {

    (item.disponibilidad !== 'Ocupado') ? this.formGroup.controls['puesto'].setValue(item.puestoId) : this.formGroup.controls['puesto'].setValue('')
    const element = document.getElementById(index);
    element?.setAttribute("style", "border: solid black; border-radius: 10px;");
    if (typeof this.id != 'undefined' && this.id != index) {
      const element2 = document.getElementById(this.id);
      element2?.setAttribute("style", "background-color:#ffffff; ");
    }
    this.id = index
    console.log()
  }



  getPuestos() { this.puestosService.getPuestos().subscribe(req => this.puestos = req) }
  getTarifa() { this.tarifaService.getTarifas().subscribe(req => this.tarifas = req) }
  validarPuesto(item: any): boolean { return (item == 'Disponible') ? true : false; }

  onPuestoSelect() {
    this.puestoSelect = !this.puestoSelect;
    this.puestoName = (this.puestoSelect) ? 'Cancelar' : 'Escoger puesto';
  }
  ComboAno() {
    let año = []
    for (var i = 1900; i <= 2021; i++) {
      año.push(i.toString());
    }
    this.anio = año.reverse()
  }
}
