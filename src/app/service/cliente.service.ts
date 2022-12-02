import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { Cliente } from '../models/req-clientes';
import { Cliente } from 'src/app/models/req-tickets';
import { tap, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { LogResponseService } from './log-response.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private router:Router, private logResponse: LogResponseService) { }

  getClientes(){
    return this.http.get<Cliente[]>(`${environment.api}api/Cliente`);
  }
  getClienteId(id:any){
    return this.http.get<Cliente>(`${environment.api}identificacion/${id}`).pipe(
      tap(m=> console.log(m)), 
      catchError(async (m) => console.log(m))
    );
  }

  getClienteIdentificacion(id:any){
    return this.http.get<Cliente>(`${environment.api}identificacion/${id}`);
  }

  postCliente(solicitud: Cliente){
    return this.http.post<Cliente>(environment.api + 'api/Cliente', solicitud).pipe(
      tap(rep => {
        this.router.navigate([`/sidenav/clientes/editar-cliente/${rep.identificacion}`]);
        this.logResponse.respOK({title: 'Datos enviado', menssage:'Cliente registrado con exito!'})
      }));
  }
}
