export interface Usuario {
    usuarioCrea:     string;
    fechaCreacion:   Date;
    usuarioModifica: string;
    fechaModifica:   Date;
    usuarioId:       string;
    nombreUsuario:   string;
    cargo:           string;
    empleadoId:      string;
    empleado:        EmpleadoUser;
}

export interface EmpleadoUser {
    usuarioCrea:     string;
    fechaCreacion:   Date;
    usuarioModifica: string;
    fechaModifica:   Date;
    identificacion:  string;
    tipoDocumuento:  string;
    nombre:          string;
    telefono:        string;
    empleadoId:      string;
    email:           string;
}