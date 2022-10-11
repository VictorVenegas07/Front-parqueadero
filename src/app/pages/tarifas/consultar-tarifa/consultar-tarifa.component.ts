import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { TarifaService } from 'src/app/service/tarifa.service';
import { Tarifa } from '../../../models/req-tarifa';

@Component({
  selector: 'app-consultar-tarifa',
  templateUrl: './consultar-tarifa.component.html',
  styleUrls: ['./consultar-tarifa.component.css']
})
export class ConsultarTarifaComponent implements OnInit {
  tarifas: Tarifa[] = []
  length = (typeof this.tarifas == 'undefined') ? 0 : this.tarifas.length;
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]

  constructor(private tarifaService: TarifaService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getTarifas();
  }
  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
  getTarifas() {
    this.spinner.show();
    this.tarifaService.getTarifas().subscribe(req => {
      setTimeout(() => {
        this.tarifas = req
        this.length = this.tarifas.length
        this.spinner.hide();
      }, 500);

    });
  }
}

