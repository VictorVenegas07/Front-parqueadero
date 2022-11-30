import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Posticket, RepTicket, Ticket } from '../models/req-tickets';
import { map, tap, catchError, throwError } from 'rxjs';
import { LogResponseService } from './log-response.service';
import { Router } from '@angular/router';
import { Filter } from '../models/params';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient, private logResponse: LogResponseService, private router:Router) { }

  getTickets() {
    return this.http.get<Ticket[]>(`${environment.api}api/Ticket`).pipe(map => map);
  }
  postTickets(ticke: any) {
    return this.http.post<RepTicket>(environment.api + 'api/Ticket', ticke).pipe(
      tap(rep => {
        this.router.navigate([`/sidenav/tickets/detalle-tickets/${rep.tickedId}`]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Ticket generado con exito!'})

      }))
  }
  getTicketId(ticketCodigo: string) {
    return this.http.get<RepTicket>(`${environment.api}api/Ticket/${ticketCodigo}`);
  }

  getFiltroTicket(filter: Filter) {
    let f: string = "?" + Object.keys(filter).filter(key => !!filter[key]).map(key => `${key}=${filter[key]}`).join("&");
    return this.http.get<Ticket[]>(`${environment.api}api/Ticket/GetFiltrarTickets${f}`);
  }

  getSalidTicketId(ticketCodigo: string) {
    return this.http.get<RepTicket>(`${environment.api}api/Ticket/Salida/${ticketCodigo}`).pipe(
      
      tap(rep => {
        this.router.navigate([`/sidenav/tickets/detalle-tickets/${rep.tickedId}`]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Salida de ticket generado con exito!'})
      }
    ));
  }

  getTicketsEmpleado(idempleado:string) {
    return this.http.get<Ticket[]>(`${environment.api}api/Ticket/ObtenerTicketEmpleado?idEmpleado=${idempleado}`).pipe(map => map);
  }
}
