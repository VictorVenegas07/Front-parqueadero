import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Productividad, TotalesMesual, VehiculosMasUsados } from '../models/req-dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getTotalesMesual(){
    return this.http.get<TotalesMesual[]>(`${environment.api}api/Estadistica/TotalGeneradoMensual`);
  }

  getProductividad(){
    return this.http.get<Productividad>(`${environment.api}api/Estadistica/Productividad`);
  }

  getVehiculosMasUsados(){
    return this.http.get<VehiculosMasUsados[]>(`${environment.api}api/Estadistica/VehiculosMasUsados`);
  }
}
