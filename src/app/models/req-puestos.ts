export interface Puesto {
    codigoPuesto:          string;
    codigoEstacionamiento: number;
    disponibilidad:        string;
    estacionamiento:       Estacionamiento;
}

interface Estacionamiento {
    codigoEstacionamiento: number;
    limitePuestos:         number;
}