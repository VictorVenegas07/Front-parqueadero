export interface Puesto {
    puestoId:          string;
    codigoPuesto:          string;
    codigoEstacionamiento: number;
    disponibilidad:        string;
    estacionamiento:       Estacionamiento;
}

interface Estacionamiento {
    codigoEstacionamiento: number;
    limitePuestos:         number;
}

export class PuestoReq {
    puestoId!:       string;
    codigoPuesto!:   string;
    disponibilidad!: string;
}