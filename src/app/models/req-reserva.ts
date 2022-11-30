import { PuestoReq } from "./req-puestos";
import { Cliente, Vehiculo } from "./req-tickets";

export interface Reserva {
    identificaion:          string;
    placa:                  string;
    codigoPuesto:           string;
    estado:                 string;
    empleado:               null;
    codigoReserva:          number;
    cliente:                Cliente;
    vehiculo:               Vehiculo;
    fechaHora:              Date;
    identificacionEmpleado: string;
}

export class ReservaResp {
    reservaId!: string;
    cliente!:   Cliente;
    vehiculo!:  Vehiculo;
    puesto!:    PuestoReq;
    fechaHora!: Date;
    estado!:    null;
}
export interface SolicitudRep {
    reservaId:  string;
    clienteId:  string;
    vehiculoId: string;
    puestoId:   string;
    fechaHora:  Date;
}

export class SolicitudReserva {

    static RservaDesdeObject(obj: any) {
        return new SolicitudReserva(
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
            new Date(),
        )
    }
    constructor(
        public cliente: Cliente,
        public vehiculo: Vehiculo,
        public puestoId:string,
        public fechaHora: Date,) {

    }
}