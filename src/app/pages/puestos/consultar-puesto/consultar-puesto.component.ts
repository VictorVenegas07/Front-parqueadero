import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { PuestoService } from 'src/app/service/puesto.service';
import { Puesto } from '../../../models/req-puestos';

@Component({
  selector: 'app-consultar-puesto',
  templateUrl: './consultar-puesto.component.html',
  styleUrls: ['./consultar-puesto.component.css']
})
export class ConsultarPuestoComponent implements OnInit {
  puestos: Puesto[] = []
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  length = (typeof this.puestos =='undefined')? 0: this.puestos.length;
  constructor(private spinner: NgxSpinnerService,private puestoService: PuestoService){ }

  ngOnInit(): void {
    this. getPuestos();
  }
  onPage(event: PageEvent){
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }

  getPuestos() {
    this.spinner.show();
    this.puestoService.getPuestos().subscribe(req => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.puestos = req
        this.length = this.puestos.length;
        this.spinner.hide();
      }, 500);

    });
  }

}
