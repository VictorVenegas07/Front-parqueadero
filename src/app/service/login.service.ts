import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserLog } from '../models/user-login';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LogResponseService } from './log-response.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public subject!: BehaviorSubject<UserLog>
  constructor(private http: HttpClient, private router:Router, private logResponse:LogResponseService) { 
    var local = localStorage.getItem('Login');
    var user = JSON.parse((local)?local: '{}')
    this.subject = new BehaviorSubject<UserLog>((typeof user == 'object')?user:new UserLog());

  }
  obtenerUsuario(datos:any){
    return this.http.post<UserLog>(`${environment.api}api/Auth`, datos).pipe(
      tap(resp => {
        localStorage.setItem('Login', JSON.stringify(resp));
        this.subject.next(resp)
        this.logResponse.respOK({title: 'Bienvenido a parking', menssage:`${resp.empleado.nombre}`})
      })
    );
  }

  closSession(){
    this.subject.next(new UserLog())
    localStorage.removeItem('Login')
    console.log(this.subject)
    this.router.navigate(["/"])
  }

  postPuestos(){
    debugger
    return this.http.post( `${environment.api}api/Puesto`, {
      codigoPuesto: 'A20',
      codigoEstacionamiento: 10,
      disponibilidad: "Disponible"
    }).pipe(
      tap(rep => console.log(rep)),
      catchError((e) => {
       console.log(e)
       return throwError(e)
      } ))
  }

}
