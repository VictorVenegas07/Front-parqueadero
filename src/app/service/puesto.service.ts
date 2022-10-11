import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Puesto } from '../models/req-puestos';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  constructor(private http: HttpClient) { }

  getPuestos(){
    return this.http.get<Puesto[]>(`${environment.api}api/Puesto`);
  }
}
