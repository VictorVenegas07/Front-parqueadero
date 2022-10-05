import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() colapsar= false;
  @Input() anchoPantall = 0; 
  constructor() { }

  ngOnInit(): void {
    // let empleado = this.apiService.get()
    // empleado
    // debugger
  }
  getBodyClass(): string {
    let estiloClases = '';
    if(this.colapsar && this.anchoPantall > 768) {
      estiloClases = "body-trymed"
    }else if(this.colapsar && this.anchoPantall <= 768 && this.anchoPantall > 0 ){
      estiloClases = 'body-md-screen'
    }
    return estiloClases;
  }

}
