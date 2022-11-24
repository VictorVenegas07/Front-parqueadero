import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/req-clientes';
import { tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(`${environment.api}api/Cliente`);
  }
  getClienteId(id:any){
    return this.http.get<Cliente>(`${environment.api}api/Cliente/identificacion/${id}`).pipe(
      tap(m=> console.log(m)), 
      catchError(async (m) => console.log(m))
    );
  }
}
