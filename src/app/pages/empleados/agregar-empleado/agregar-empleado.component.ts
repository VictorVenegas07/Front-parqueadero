import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { LoginService } from 'src/app/service/login.service';
import { Empleado, EmpleadoReq } from '../../../models/req-empleados';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formGroup!: FormGroup;
  tdocumentos = ['CC', 'TI', 'CE']
  tusers = ['Empleado','Administrador']



  constructor(private fb: FormBuilder, private loginService:LoginService, private spinner: NgxSpinnerService, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submited(){
    // this.formGroup.controls['userCrea'].setValue(this.loginService.subject.value.empleado.nombre)
    if (this.formGroup.invalid) {
      return
    }
    let empleado = EmpleadoReq.EmpleadoDesdeObject(this.formGroup);
    this.empleadoService.postEmpleado(empleado).subscribe();


  }

  private buildForm() {
    this.formGroup = this.fb.group({
      tDocumento: new FormControl('', Validators.required),
      identificacion: new FormControl('', [Validators.required, Validators.min(4)]),
      nombres: new FormControl('', [Validators.required, Validators.min(4)]),
      telefono: new FormControl('', [Validators.required, Validators.min(4)]),
      tuser: new FormControl('', [Validators.required, Validators.min(4)]),
      email: new FormControl('', [Validators.required, Validators.min(4)]),
      nombreuser: new FormControl('', [Validators.required, Validators.min(4)]),
      contraseña: new FormControl('', [Validators.required, Validators.min(4)]),
      // userCrea: new FormControl('')


    });
  }
}
