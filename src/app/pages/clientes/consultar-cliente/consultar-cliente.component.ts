import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../../../service/login.service';
import { ClienteService } from '../../../service/cliente.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/req-tickets';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HandleErrorsComponent } from 'src/app/components/modals/handle-errors/handle-errors.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { vehiculos } from '../../vehiculos/consultar-vehiculo/consultar-vehiculo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {
  clientes: Cliente[] = []
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  length = (typeof this.clientes =='undefined')? 0: this.clientes.length;

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private router:Router,) { }

  ngOnInit(): void {
    this.getClientes();
  }
  onPage(event: PageEvent){
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }

  getClientes() {
    this.spinner.show();
    this.clienteService.getClientes().subscribe(req => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.clientes = req
        this.length = this.clientes.length;
        this.spinner.hide();
      }, 500);

    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(HandleErrorsComponent, { width: '250px', enterAnimationDuration, exitAnimationDuration, });

  }

  consultarDetalle(item:Cliente){
    this.router.navigate(['/','sidenav', 'clientes', 'editar-cliente', item.identificacion])
  }

}