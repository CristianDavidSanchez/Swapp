import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ElementoTrueque, ElementoDeseado, Trueque } from 'src/app/models/negocio.model';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mis-elementos',
  templateUrl: './mis-elementos.component.html',
  styleUrls: ['./mis-elementos.component.css']
})
export class MisElementosComponent implements OnInit {
  menuCard:any=false;
  elementos:ElementoTrueque[]=[];
  loggedUser:Usuario=new Usuario();
  elementoDeseado:ElementoDeseado=new ElementoDeseado();
  constructor(private httpService:HttpService,public router:Router) {
    let usuario:any=localStorage.getItem('user');
    if (localStorage.getItem('user')!=null){this.loggedUser=JSON.parse(usuario);}
   }

  ngOnInit(): void {
    if(this.loggedUser!=undefined){
      let userId= this.loggedUser.id;
      this.httpService.getElementosByUser(userId!).subscribe(
        res=>{this.elementos=res.filter(elemento=>elemento.disponible==true);
          console.log(this.elementos);
        }
      )
    }

  }
  public eliminarElemento(id:any){
    console.log(id);
    this.httpService.deleteElemento(id).subscribe(res=>{
      console.log(res);
    });
    delay(2000)
    window.location.reload()
  }
}
