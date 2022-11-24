import { Cliente } from "./req-clientes";
import { Vehiculo } from "./req-vehiculo";

export class Ticket
{
    codigoTicked?:number;
    identificacionCliente?:string;
    cliente?:Cliente;
    placa?:string;
    vehiculo?:Vehiculo;
    valorTarifa?:number;
    codigoPuesto?:string;
    estado?:string;
    horaDeEntrada?:Date;
    horaDeSalida?:Date;
    total?:number;
    identificacionEmpleado?:String;

}