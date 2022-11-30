import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservaResp } from 'src/app/models/req-reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.css']
})
export class ModalActionComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalActionComponent>,
  @Inject(MAT_DIALOG_DATA) public data: ReservaResp,
  private reservaService: ReservaService
  ){ }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onDelete(){
    this.reservaService.getCancelarReservar(this.data.reservaId).subscribe();
    this.dialogRef.close();
  }
}
