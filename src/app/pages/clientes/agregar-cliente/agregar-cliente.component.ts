import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/req-tickets';
import { ClienteService } from 'src/app/service/cliente.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  tdocumentos = ['CC', 'TI', 'CE']
  formGroup!: FormGroup;
  constructor(private fb: FormBuilder, private clienteService: ClienteService, private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.buildForm();
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

  submited() {
    this.formGroup.controls['empleado'].setValue(this.loginService.subject.value.empleado.empleadoId)
    if (this.formGroup.invalid) {
      return
    }
    let cliente = Cliente.clienteDesdeObject({
      'identificacion': this.formGroup.controls['identificacion'].value,
      'tipoDocumuento': this.formGroup.controls['tDocumento'].value,
      'nombre': this.formGroup.controls['nombres'].value,
      'telefono': this.formGroup.controls['telefono'].value
    });
    this.clienteService.postCliente(cliente).subscribe();
  }
}
