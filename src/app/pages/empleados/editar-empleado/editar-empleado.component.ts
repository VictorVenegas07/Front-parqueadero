import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Usuario } from 'src/app/models/rep-usuario';
import { Ticket } from 'src/app/models/req-tickets';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { LoginService } from 'src/app/service/login.service';
import { TicketsService } from 'src/app/service/tickets.service';
import { Empleado, EmpleadoReq } from '../../../models/req-empleados';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formGroup!: FormGroup;
  tdocumentos = ['CC', 'TI', 'CE']
  tusers = ['Empleado', 'Administrador']
  empleado!: Usuario;
  id: boolean = false;
  buttonSave: boolean = true;
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  tickets: Ticket[] = []
  length = (typeof this.tickets == 'undefined') ? 0 : this.tickets.length;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private empleadoService: EmpleadoService,
    private ticketService: TicketsService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.statEmpleado();
  }
  statEmpleado() {
    this.route.paramMap.subscribe(params => {
      this.id = params.has('id');
      if (this.id) {
        this.buttonSave = !this.buttonSave;
        let idempleado = (this.route.snapshot.paramMap.get('id') || "");
        this.buscarEmpleado(idempleado);
      } 
    });
  }

  submited() {
    // this.formGroup.controls['userCrea'].setValue(this.loginService.subject.value.empleado.nombre)
    // if (this.formGroup.invalid) {
    //   return
    // }
    // let empleado = EmpleadoReq.EmpleadoDesdeObject(this.formGroup);
    // this.empleadoService.postEmpleado(empleado).subscribe();
  }
  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }

  buscarEmpleado(id: string) {
    this.empleadoService.postEmpleadoId(id).subscribe(x => 
      {
      this.empleado = x;
      this.getTicketEmpleado(x.empleadoId)
      this.setValue();
      this.spinner.hide();
    });
  }
  setValue() {
      this.formGroup.controls['tDocumento'].setValue(this.empleado.empleado.tipoDocumuento)
      this.formGroup.controls['identificacion'].setValue( this.empleado.empleado.identificacion)
      this.formGroup.controls['nombres'].setValue( this.empleado.empleado.nombre)
      this.formGroup.controls['telefono'].setValue( this.empleado.empleado.telefono)
      this.formGroup.controls['tuser'].setValue( this.empleado.cargo)
      this.formGroup.controls['email'].setValue( this.empleado.empleado.email)
      this.formGroup.controls['nombreuser'].setValue( this.empleado.nombreUsuario)
      this.formGroup.controls['contraseña'].setValue( "********")
      this.formGroup.controls['userCrea'].setValue( this.empleado.empleado.usuarioCrea)
      // this.setdisable()
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
      userCrea: new FormControl('')
    });
  }
  getTicketEmpleado(id:string) {
    this.spinner.show();
    this.ticketService.getTicketsEmpleado(id).subscribe(req => {
      setTimeout(() => {
        console.log(req)
        this.tickets = req.reverse()
        this.length = this.tickets.length;
      }, 500);

    });
  }

}
