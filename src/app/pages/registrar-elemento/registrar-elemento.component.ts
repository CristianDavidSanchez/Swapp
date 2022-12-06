import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Categoria, ElementoDeseado, ElementoTrueque } from 'src/app/models/negocio.model';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-elemento',
  templateUrl: './registrar-elemento.component.html',
  styleUrls: ['./registrar-elemento.component.css']
})
export class RegistrarElementoComponent implements OnInit {
  elementoNuevo:ElementoTrueque=new ElementoTrueque;
  loggedUser:Usuario=new Usuario;
  categorias:Categoria[]=[];
  categoriaSelected:any;
  elementosDeseados:ElementoDeseado[]=[]
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private httpService:HttpService, public router:Router) { }

  ngOnInit(): void {
    let usuario:any=localStorage.getItem('user')
    if (localStorage.getItem('user')!=null){this.loggedUser=JSON.parse(usuario);}
    this.httpService.getCategorias().subscribe(
      res=>{this.categorias=res
      console.log(this.categorias)
      }
    )
  }
  public registrarElemento(){
    this.elementoNuevo.elementosDeseados=this.elementosDeseados;
    let categoriaSend={
      id:this.categoriaSelected.id
    }
    let usuarioSend={
      id:this.loggedUser.id
    }
    this.elementoNuevo.usuario=usuarioSend;
    this.elementoNuevo.categoria=categoriaSend;
    this.httpService.postElemento(this.elementoNuevo).subscribe(
      res=>{
        console.log(res);
        console.log(this.elementoNuevo)

      }
    )
    this.router.navigate(['misElementos']); 
  }
  public remove(elementoDeseado:ElementoDeseado){
    const index = this.elementosDeseados.indexOf(elementoDeseado);
    if (index >= 0) {
      this.elementosDeseados.splice(index, 1);
    }
  }
  public add(event: MatChipInputEvent){
    const value = (event.value || '').trim();
    if (value) {
      this.elementosDeseados.push({nombre: value});
    }
    event.chipInput!.clear();
  }
}
