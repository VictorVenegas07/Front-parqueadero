import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleado, EmpleadoReq } from '../models/req-empleados';
import { Router } from '@angular/router';
import { RepTicket } from '../models/req-tickets';
import { LogResponseService } from './log-response.service';
import { Usuario } from '../models/rep-usuario';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient,  private logResponse: LogResponseService) { }

  getEmpleados(){
    return this.http.get<Usuario[]>(`${environment.api}api/Auth/GetUsuarios`);
  }
  postEmpleado(empleado:EmpleadoReq){
    return this.http.post<Empleado>(`${environment.api}api/Empleado`, empleado).pipe(
      tap(rep => {
        
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Empleado se agrego con exito!'})
      }
    ))
  }

  postEmpleadoId(id:string){
    return this.http.get<Usuario>(`${environment.api}api/Auth/GetUsuariosId?idEmpleado=${id}`).pipe(map((response: Usuario) => response));
  }
}
