export interface Empleado {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
    tipoEmpleado:   string;
    correo:         string;
    usuario:        Usuario;
    horarios:       Horario[];
    reservas:       Reserva[];
    tickets:        Ticket[];
}

 interface Horario {
    codigoHorario: number;
    fecha:         Date;
    tipo:          string;
    idEmpleado:    string;
}

 interface Reserva {
    codigoReserva:          number;
    identificaion:          string;
    placa:                  string;
    codigoPuesto:           string;
    fechaHora:              Date;
    estado:                 string;
    identificacionEmpleado: string;
}

 interface Ticket {
    codigoTicked:           number;
    identificacionCliente:  string;
    cliente:                Cliente;
    placa:                  string;
    vehiculo:               Vehiculo;
    valorTarifa:            number;
    codigoPuesto:           string;
    estado:                 string;
    horaDeEntrada:          Date;
    horaDeSalida:           Date;
    total:                  number;
    identificacionEmpleado: string;
}

 interface Cliente {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
}

 interface Vehiculo {
    placa:  string;
    modelo: string;
    marca:  string;
    tipo:   string;
}

 interface Usuario {
    idUsuario:      number;
    nombreUsuario:  string;
    contrasena:     string;
    cargo:          string;
    identificacion: string;
}
