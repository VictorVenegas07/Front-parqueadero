import { FormControl, FormGroup } from '@angular/forms';

export interface Empleado {
    empleadoId:string;
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


export class EmpleadoReq {
    static EmpleadoDesdeObject(obj: any) {
        return new EmpleadoReq(
            //  obj?.controls['userCrea'].value,
             obj?.controls['identificacion'].value,
             obj?.controls['tDocumento'].value,
            obj?.controls['nombres'].value,
            obj?.controls['telefono'].value,
            obj?.controls['email'].value,
            UsuarioResp.UserDesdeObject(obj)
        )
    }
constructor(
    // public usuarioCrea:     string,
    public identificacion:  string,
    public tipoDocumuento:  string,
    public nombre:          string,
    public telefono:        string,
    public email:           string,
    public usuario:         UsuarioResp) {
    
}
}

export class UsuarioResp {
  static UserDesdeObject(obj: any) {
    return new UsuarioResp(
        obj?.controls['nombreuser'].value,
        obj?.controls['contraseña'].value,
        obj?.controls['tuser'].value,
    )
  }
  constructor(
    public nombreUsuario: string,
    public contraseña:    string,
    public cargo:         string,
  ) {
    
  }
}
