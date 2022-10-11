import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { TicketsService } from 'src/app/service/tickets.service';
import { Ticket } from '../../../models/req-tickets';


@Component({
  selector: 'app-consultar-tickets',
  templateUrl: './consultar-tickets.component.html',
  styleUrls: ['./consultar-tickets.component.css']
})
export class ConsultarTicketsComponent implements OnInit {
  tickets: Ticket[] = []
  page_size = 5;
  page_number = 1;
  pageSizeOptions = [5, 10, 25, 100]
  length = (typeof this.tickets == 'undefined') ? 0 : this.tickets.length;
  constructor(private spinner: NgxSpinnerService, private ticketService: TicketsService) { }

  ngOnInit(): void {
    this. getTicket() ;
  }

  onPage(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
  getTicket() {
    this.spinner.show();
    this.ticketService.getTickets().subscribe(req => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        console.log(req)
        this.tickets = req
        this.length = this.tickets.length;
        this.spinner.hide();
      }, 500);

    });
  }

 
}
