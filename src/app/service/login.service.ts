import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  obtenerUsuario(){
    return this.http.post<any>(`${environment.api}api/Login`, {usuario: 'admin', contrasena: '12345'});
  }
}
