import { Vehiculo } from "./req-vehiculo";

export interface Cliente {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
    vehiculos:      Vehiculo[];
}


