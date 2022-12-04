import { Usuario } from "./user.model";

export class ElementoTrueque{
    id?:number;
    nombre?:string;
    descripcion?:string;
    enlaceImagen?:string;
    precio?:number;
    disponible?:boolean;
    estadoElemento?:string;
    usuario?:Usuario;
    categoria?:Categoria;
    elementosDeseados?:ElementoDeseado[];
}
export class Trueque{
    id?:number;
    estado?:string;
    fechaInicio?:Date;
    fechaFinal?:Date;
    precioLogistica?:number;
    solicitanteId?:number;
    solicitadoId?:number;
    elementoDeseado?:ElementoDeseado;
    elementoTrueque?:ElementoTrueque;
}
export class ElementoDeseado{
    id?:number;
    nombre?:string;
}
export class Categoria{
    id?:number;
    nombre?:string;
}