import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Reserva, ReservaResp, SolicitudReserva } from '../models/req-reserva';
import { LogResponseService } from './log-response.service';
import { map, tap } from 'rxjs';
import { LoginService } from './login.service';
import { RepTicket, Ticket } from '../models/req-tickets';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient, private router:Router,private logResponse: LogResponseService, private loginService:LoginService) { }

  getReservas() {
    return this.http.get<ReservaResp[]>(`${environment.api}api/Reserva`).pipe(map => map);
  }
  getReservaId(codigoReserva:string) {
    return this.http.get<ReservaResp>(`${environment.api}api/Reserva/${codigoReserva}`);
  }

  posGenerarTicket(reserva:any){
    // reserva.cliente = this.loginService.subject.value.empleado.identificacion 
    debugger
    return this.http.post<RepTicket>(`${environment.api}Generar/Ticket`, reserva).pipe(
      tap(rep => {
        console.log(this.router)
        // this.router.
        this.router.navigate(['/','sidenav','reservas','detalle',reserva.reservaId]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Salida de ticket generado con exito!'})
      }
    ))
  }

  postReservar(solicitud: SolicitudReserva){
    return this.http.post<Reserva>(environment.api + 'api/Reserva', solicitud).pipe(
      tap(rep => {
        this.router.navigate([`/solicitar/detalle/reserva/solicitud/${rep.codigoReserva}`]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Reserva registrada con exito!'})
      }))
  }
}
