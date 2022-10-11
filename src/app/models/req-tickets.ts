interface Empleado {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
    tipoEmpleado:   string;
    correo:         string;
    horarios:       Horario[];
    usuario:        Usuario;
    reservas:       Reserva[];
    tickets:        Ticket[];
}

export interface Ticket {
    cliente:                Cliente;
    vehiculo:               Vehiculo;
    codigoPuesto:           string;
    identificacionEmpleado: string;
    codigoTicked:           number;
    placa:                  string;
    identificacionCliente:  string;
    estado:                 string;
    total:                  number;
    horaDeEntrada:          Date;
    horaDeSalida:           Date;
    empleado?:              Empleado;
    valorTarifa?:           number;
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

 interface Usuario {
    idUsuario:      number;
    nombreUsuario:  string;
    contrasena:     string;
    cargo:          string;
    identificacion: string;
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
