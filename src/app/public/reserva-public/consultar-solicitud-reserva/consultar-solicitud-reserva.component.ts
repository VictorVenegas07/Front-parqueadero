import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReservaResp } from 'src/app/models/req-reserva';
import { ReservaService } from 'src/app/service/reserva.service';
import { Reserva } from '../../../models/req-reserva';
import { ModalActionComponent } from '../modal-action/modal-action.component';

@Component({
  selector: 'app-consultar-solicitud-reserva',
  templateUrl: './consultar-solicitud-reserva.component.html',
  styleUrls: ['./consultar-solicitud-reserva.component.css']
})
export class ConsultarSolicitudReservaComponent implements OnInit {
  reservas: ReservaResp[] = []
  bandera: boolean = false;
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog) { }
  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.formGroup = this.fb.group({
      identificacion: new FormControl('', [Validators.required, Validators.min(4)]),
    });
  }

  submited() {
    if (this.formGroup.invalid) {
      return
    }
    this.guardarReserva();
  }

  guardarReserva() {
    this.spinner.show();
    this.reservaService.getReservaCliente(this.formGroup.controls['identificacion'].value).subscribe(req => {
     
        this.reservas = req.reverse()
    });
    setTimeout(() => {
    this.spinner.hide();
  }, 500);

  }

  cancelarReserva(item: ReservaResp) {
    this.dialog.open(ModalActionComponent, {
      width: '250px',
      height: '100px',
      data: item
    });
  }
}
