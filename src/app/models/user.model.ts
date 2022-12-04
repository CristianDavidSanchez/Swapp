export class Usuario{
    id?:number;
    nombreCompleto?: string;
    documentoIdentificacion?:number;
    correo?:string;
    celular?:number;
    ciudad?:string;
    direccion?:string;
    estado?:boolean;
    contrasena?:string;
    rol?:Rol;
}

export class Rol{
    id?:number;
    nombre?:string;
    descripcion?:string;
    activo?:boolean;
    permisos?:Permiso[];
}

export class Permiso{
    id?:number;
    nombre?:string;
    descripcion?:string;
}