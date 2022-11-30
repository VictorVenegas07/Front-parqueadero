import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Reserva, ReservaResp, SolicitudReserva, SolicitudRep } from '../models/req-reserva';
import { LogResponseService } from './log-response.service';
import { map, tap } from 'rxjs';
import { LoginService } from './login.service';
import { RepTicket, Ticket } from '../models/req-tickets';
import { Filter } from '../models/params';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient, private router:Router,private logResponse: LogResponseService, private loginService:LoginService) { }

  getReservas() {
    return this.http.get<ReservaResp[]>(`${environment.api}api/Reserva`).pipe(map => map);
  }
  getReservaCliente(codigoReserva:string) {
    return this.http.get<ReservaResp[]>(`${environment.api}Cliente/${codigoReserva}`);
  }
  getReservaId(codigoReserva:string) {
    return this.http.get<ReservaResp>(`${environment.api}api/Reserva/${codigoReserva}`);
  }

  posGenerarTicket(reserva:any){
    return this.http.post<RepTicket>(`${environment.api}Generar/Ticket`, reserva).pipe(
      tap(rep => {
        this.router.navigate(['/','sidenav','reservas','detalle',reserva.reservaId]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Salida de ticket generado con exito!'})
      }
    ))
  }

  postReservar(solicitud: SolicitudReserva){
    return this.http.post<SolicitudRep>(environment.api + 'api/Reserva', solicitud).pipe(
      tap(rep => {
        this.router.navigate([`/solicitar/detalle/reserva/solicitud/${rep.reservaId}`]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Reserva registrada con exito!'})
      }))
  }

  getCancelarReservar(solicitud: string){
    return this.http.get<ReservaResp>(`${environment.api}Cancelar/${solicitud}`).pipe(
      tap(rep => {
        debugger
        this.router.navigate([`/solicitar/detalle/reserva/solicitud/${rep.reservaId}`]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Reserva Cancelada con exito!'})
      }))
  }
  getFiltroReserva(filter: Filter) {
    let f: string = "?" + Object.keys(filter).filter(key => !!filter[key]).map(key => `${key}=${filter[key]}`).join("&");
    return this.http.get<ReservaResp[]>(`${environment.api}api/Reserva/GetFiltrarReserva${f}`);
  }
}
