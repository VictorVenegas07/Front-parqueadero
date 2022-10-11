export interface Vehiculo {
    placa:         string;
    modelo:        string;
    marca:         string;
    tipo:          string;
    codigoCliente: string;
    cliente:       Cliente;
}

interface Cliente {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
}