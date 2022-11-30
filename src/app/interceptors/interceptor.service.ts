import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, catchError, map, Observable, throwError, tap, finalize } from 'rxjs';
import { HandleErrorsComponent } from '../components/modals/handle-errors/handle-errors.component';
import Swal from 'sweetalert2'
import { ReqResponseUsuario } from '../models/user-login';
import { LoginService } from '../service/login.service';
import { ReErrors } from '../models/req-error';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {
  erros!:ReErrors;
  constructor(private dialog: MatDialog, private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqUsuario = this.loginService.subject.value.token
    const headers = new HttpHeaders({
      'authorization': `Bearer ${reqUsuario}`
    });
    const reqCole = req.clone({
      headers
    });
    return next.handle(reqCole).pipe(
      catchError(this.manejarError),
    );
  }

  repOK(req: any) {
    let valor = (req.method == 'POST') ? 'guardados' : 'actualizados'
    if (req.method == 'POST' || req.method == 'PUT') {
      Swal.fire(
        'Correto!',
        `Datos ${valor} con exito`,
        'success'
      );
    }
  }

  

  manejarError(error: HttpErrorResponse) {
    switch (error.status) {
      case 400:
        let val  = Object.values(error.error.errors);
        let mensaje =""
         val.map((x, index)=> {
          mensaje = `${index}: ${x}`
        })
        Swal.fire({
          title: error.error.title,
          text: mensaje,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        break;
      case 500:
        console.log(error.error);
        break;
      default:
        console.log(error.error);
        break;
    }
    if (error.status == 400) {

    }
    return throwError('Error personalizado');
  }

}
