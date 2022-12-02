import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { LoginService } from 'src/app/service/login.service';
import { Cliente } from 'src/app/models/req-tickets';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  tdocumentos = ['CC', 'TI', 'CE']
  formGroup!: FormGroup;
  cliente!: Cliente;
  detalle:boolean = false;
  constructor( private route: ActivatedRoute,private fb: FormBuilder, private clienteService: ClienteService, private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.configInitial();
  }
  private buildForm() {
    this.formGroup = this.fb.group({
      tDocumento: new FormControl('', Validators.required),
      identificacion: new FormControl('', [Validators.required, Validators.min(4)]),
      nombres: new FormControl('', [Validators.required, Validators.min(4)]),
      telefono: new FormControl('', [Validators.required, Validators.min(4)]),
      empleado: new FormControl('', [Validators.required, Validators.min(2)]),
    });
  }

  private configInitial() {
    debugger
    this.route.paramMap.subscribe(params => {
      this.detalle = params.has('id');
      if (this.detalle) {
        this.getDetalle();
      } 
    });
  }

  private getDetalle(){
    let idSalida = this.route.snapshot.paramMap.get('id');
    (idSalida != null)?this.obtenerCliente(idSalida):null
  }
  obtenerCliente(id:string){
    this.clienteService.getClienteIdentificacion(id).subscribe(p=> {
      this.cliente = p;
      this.setValues();
    })
  }

  private setValues() {
    this.formGroup.controls['tDocumento'].setValue(this.cliente.tipoDocumuento)
    this.formGroup.controls['identificacion'].setValue( this.cliente.identificacion)
    this.formGroup.controls['nombres'].setValue( this.cliente.nombre)
    this.formGroup.controls['telefono'].setValue( this.cliente.telefono)
    this.setdisable()
  }

  private setdisable() {
    this.formGroup.controls['tDocumento'].disable()
    this.formGroup.controls['identificacion'].disable()
    this.formGroup.controls['nombres'].disable()
    this.formGroup.controls['telefono'].disable()
  }

}
