import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  constructor(private usuarioService: LoginService) { }

  ngOnInit(): void {
  }
  obtenerUsuario(){
    this.usuarioService.obtenerUsuario().subscribe( rep => console.log(rep));
  }

}
