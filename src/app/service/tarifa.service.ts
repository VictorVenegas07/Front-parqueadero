import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tarifa } from '../models/req-tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  constructor(private http: HttpClient) { }

  getTarifas(){
    return this.http.get<Tarifa[]>(`${environment.api}api/Tarifa`);
  }
}
