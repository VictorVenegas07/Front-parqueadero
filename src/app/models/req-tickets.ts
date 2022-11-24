import { PuestoReq, Puesto } from './req-puestos';
interface Empleado {
    identificacion: string;
    tipoDocumuento: string;
    nombre: string;
    telefono: string;
    tipoEmpleado: string;
    correo: string;
    horarios: Horario[];
    usuario: Usuario;
    reservas: Reserva[];
    tickets: Ticket[];
}

export interface Ticket {
    cliente: Cliente;
    vehiculo: Vehiculo;
    codigoPuesto: string;
    Puesto: PuestoReq;
    identificacionEmpleado: string;
    tickedId: number;
    placa: string;
    identificacionCliente: string;
    estado: string;
    total: number;
    horaDeEntrada: Date;
    horaDeSalida: Date;
    empleado?: Empleado;
    valorTarifa?: number;
}

interface Horario {
    codigoHorario: number;
    fecha: Date;
    tipo: string;
    idEmpleado: string;
}

interface Reserva {
    codigoReserva: number;
    identificaion: string;
    placa: string;
    codigoPuesto: string;
    fechaHora: Date;
    estado: string;
    identificacionEmpleado: string;
}

interface Usuario {
    idUsuario: number;
    nombreUsuario: string;
    contrasena: string;
    cargo: string;
    identificacion: string;
}

export interface Cliente {
    clienteId: string;
    identificacion: string;
    tipoDocumuento: string;
    nombre: string;
    telefono: string;
}

export interface Vehiculo {
    vehiculoId: string;
    placa: string;
    modelo: string;
    marca: string;
    tipo: string;
}


export class Posticket {

    static ticketDesdeObject(obj: any) {
        debugger
        return new Posticket(
            Cliente.clienteDesdeObject({
                'identificacion': obj?.controls['identificacion'].value,
                'tipoDocumuento': obj?.controls['tDocumento'].value,
                'nombre': obj?.controls['nombres'].value,
                'telefono': obj?.controls['telefono'].value
            }),
            Vehiculo.vehiculoDesdeObject({
                'placa': obj?.controls['placa'].value,
                'modelo': obj?.controls['modelo'].value,
                'marca': obj?.controls['marca'].value,
                'tipo': obj?.controls['tVehiculo'].value
            }),
            obj?.controls['puesto'].value,
            obj?.comtrols['tarifaId'].value,
            obj?.comtrols['empleado'].value,
        )
    }
    constructor(
        public cliente: Cliente,
        public vehiculo: Vehiculo,
        public puestoId: string,
        public tarifaId: string,
        public empleadoId: string,
        
        ) {

    }
}

export class Cliente {
    static clienteDesdeObject(obj: any) {
        return new Cliente(
            obj['tipoDocumuento'],
            obj['identificacion'],
            obj['nombre'],
            obj['telefono'],
        )
    }
    /**
     *
     */
    constructor(public tipoDocumuento: string,
        public identificacion: string,
        public nombre: string,
        public telefono: string) {

    }
}

export class Vehiculo {
    static vehiculoDesdeObject(obj: any) {
        return new Vehiculo(
            obj['placa'],
            obj['modelo'],
            obj['marca'],
            obj['tipo'],
        )
    }
    /**
     *
     */
    constructor(public placa: string,
        public modelo: string,
        public marca: string,
        public tipo: string,) {

    }
}



export interface RepTicket {
    tickedId:           string;
    cliente:                Cliente;
    vehiculo:               Vehiculo;
    puesto:                 PuestoReq;
    estado:                 string;
    horaDeEntrada:          Date;
    horaDeSalida:           Date;
    total:                  number;
    identificacionEmpleado: string;
}