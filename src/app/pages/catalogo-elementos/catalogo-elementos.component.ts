import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ElementoDeseado, ElementoTrueque, Trueque } from 'src/app/models/negocio.model';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-catalogo-elementos',
  templateUrl: './catalogo-elementos.component.html',
  styleUrls: ['./catalogo-elementos.component.css']
})
export class CatalogoElementosComponent implements OnInit {
  menuCard:any=false;
  showId:any=null;
  elementos:ElementoTrueque[]=[];
  solicitante:Usuario=new Usuario();
  elementoDeseado:ElementoDeseado=new ElementoDeseado();
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    let usuario:any=localStorage.getItem('user')
    if (usuario!=null){this.solicitante=JSON.parse(usuario);}
    this.httpService.getCatalogoElementosDisponibles().subscribe(
      res=>{this.elementos=res.filter(elemento=>elemento.disponible==true&&elemento.usuario?.id!=this.solicitante.id)
      }
    )
  }

  public solicitarTrueque(elemento:ElementoTrueque){
    if(elemento){
      let trueque:Trueque={
          solicitante:{id:this.solicitante.id},
          elementoTrueque:{id:elemento.id},
          elementoDeseado:{id:this.elementoDeseado.id}
      }
      this.menuCard=false;
      this.httpService.solicitarTrueque(trueque).subscribe(
        res=>
        {
          console.log(res);
        }
      )
      delay(2000)
      window.location.reload()
    }
  }

}
