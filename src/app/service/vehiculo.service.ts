import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Vehiculo } from '../models/req-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  getVehiculos(){
    return this.http.get<Vehiculo[]>(`${environment.api}api/Vehiculoi`);
  }

  getVehiculoE(){
    return this.http.get<Vehiculo[]>(`https://<hostname>/api/vehicles`);
  }
}
