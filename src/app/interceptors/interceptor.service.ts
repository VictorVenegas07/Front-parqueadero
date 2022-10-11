import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { HandleErrorsComponent } from '../components/modals/handle-errors/handle-errors.component';
import Swal from 'sweetalert2'
import {  ReqResponseUsuario } from '../models/user-login';
import { LoginService } from '../service/login.service';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {
  constructor(private dialog: MatDialog, private loginService:LoginService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let  reqUsuario = this.loginService.subject.value.token
    const headers = new HttpHeaders({
      'authorization': `Bearer ${reqUsuario}`
    });
    const reqCole = req.clone({
    headers
    });
    return next.handle(reqCole).pipe( 
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    let title = Object.keys(error.error.errors);
    let mensaje = ``;
    let contarErros = 0;
    console.log(Object.values(error.error.errors))
    Object.values(error.error.errors).forEach(element => {
      contarErros ++
     mensaje = `${contarErros}. ${element}
      ${mensaje}`
    });
    Swal.fire({
      title: title ,
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
    return throwError('Error personalizado');
  }
}
