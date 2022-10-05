import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private http: HttpClient,){} 
     total = [];
     error= '';
  get(){
   this.http.get<any>('https://localhost:5001/api/Empleado').subscribe(data => {
    this.total = data;
 },error => this.error = error);
 this.total
debugger  
}

}