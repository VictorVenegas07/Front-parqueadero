export class ReqResponseUsuario {
    idUsuario!:     number;
    nombre!:        string;
    nombreUsuario!: string;
    empleado!:      Empleado;
    cargo!:         string;
    token!:         string;
}

interface Empleado {
    identificacion: string;
    tipoDocumuento: string;
    nombre:         string;
    telefono:       string;
    tipoEmpleado:   string;
    correo:         string;
    horarios:       any[];
    usuario:        ReqUsuario;
    reservas:       null;
    tickets:        null;
}

interface ReqUsuario {
    idUsuario:      number;
    nombreUsuario:  string;
    contrasena:     string;
    cargo:          string;
    identificacion: string;
}
