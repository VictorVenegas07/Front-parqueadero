import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReservaResp } from 'src/app/models/req-reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-consultar-solicitud-reserva',
  templateUrl: './consultar-solicitud-reserva.component.html',
  styleUrls: ['./consultar-solicitud-reserva.component.css']
})
export class ConsultarSolicitudReservaComponent implements OnInit {
  reservas: ReservaResp[] = []
  bandera: boolean = false;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder,   private reservaService: ReservaService, private spinner: NgxSpinnerService) { }
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
    debugger
    this. guardarReserva();
  }

  guardarReserva() {
    this.spinner.show();
    this.reservaService.getReservaCliente(this.formGroup.controls['identificacion'].value).subscribe(req => {
      setTimeout(() => {
        this.reservas = req.reverse()
      }, 500);
      this.spinner.hide();
    });
    
  }
}
