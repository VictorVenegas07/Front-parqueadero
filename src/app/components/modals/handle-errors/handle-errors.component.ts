import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-handle-errors',
  templateUrl: './handle-errors.component.html',
  styleUrls: ['./handle-errors.component.css']
})
export class HandleErrorsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HandleErrorsComponent>) { }

  ngOnInit(): void {
  }

}
