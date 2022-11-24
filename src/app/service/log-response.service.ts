import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogResponseService {

  constructor( private toastr: ToastrService) { }

  respOK(objet:any){
    this.toastr.success(objet.menssage, objet.title,{
      timeOut: 2000,
    });
  }
}
