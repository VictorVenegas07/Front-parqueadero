import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Bearer': 'aaAAAAA'
    });

    const reqCole = req.clone({
    headers
    });
    return next.handle(reqCole).pipe( 
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registrando en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  }
}
