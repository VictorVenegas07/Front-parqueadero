export interface Cliente {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
    vehiculos:      Vehiculo[];
}

interface Vehiculo {
    placa:  string;
    modelo: string;
    marca:  string;
    tipo:   string;
}