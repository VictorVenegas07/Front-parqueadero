import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ReqResponseUsuario } from '../models/user-login';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public subject!: BehaviorSubject<ReqResponseUsuario>
  constructor(private http: HttpClient, private router:Router) { 
    var local = localStorage.getItem('Login');
    var user = JSON.parse((local)?local: '{}')
    this.subject = new BehaviorSubject<ReqResponseUsuario>((typeof user == 'object')?user:new ReqResponseUsuario());

  }
  obtenerUsuario(datos:any){
    return this.http.post<ReqResponseUsuario>(`${environment.api}api/Login`, datos).pipe(
      tap(resp => {
        localStorage.setItem('Login', JSON.stringify(resp));
        this.subject.next(resp)
        console.log()
      })
    );
  }

  closSession(){
    this.subject.next(new ReqResponseUsuario())
    localStorage.removeItem('Login')
    console.log(this.subject)
    this.router.navigate(["/home"])
  }

}
