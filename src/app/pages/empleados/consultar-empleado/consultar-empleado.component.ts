import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Usuario } from 'src/app/models/rep-usuario';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { Empleado } from '../../../models/req-empleados';

@Component({
  selector: 'app-consultar-empleado',
  templateUrl: './consultar-empleado.component.html',
  styleUrls: ['./consultar-empleado.component.css']
})
export class ConsultarEmpleadoComponent implements OnInit {
  empleados: Usuario[] = []
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  length = (typeof this.empleados == 'undefined') ? 0 : this.empleados.length;
  constructor(private spinner: NgxSpinnerService, private empleadoService: EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.getEmpleados()
  }

  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
  getEmpleados() {
    this.spinner.show();
    this.empleadoService.getEmpleados().subscribe(req => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        console.log(req)
        this.empleados = req
        this.length = this.empleados.length;
        this.spinner.hide();
      }, 500);

    });
  }

  detalle(item: Usuario) {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    });
    this.router.navigate(['/','sidenav','empleados','detalle-empleado', item.usuarioId]);
  }
}
