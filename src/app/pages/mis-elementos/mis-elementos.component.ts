import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  showId:any=null;
  constructor(private httpService:HttpService,private snackBar: MatSnackBar) {
    let usuario:any=localStorage.getItem('user');
    if (localStorage.getItem('user')!=null){this.loggedUser=JSON.parse(usuario);}
   }

  ngOnInit(): void {
    if(this.loggedUser!=undefined){
      let userId= this.loggedUser.id;
      this.httpService.getElementosByUser(userId!).subscribe({
        next:res=>{this.elementos=res.filter(elemento=>elemento.disponible==true);
            },
        error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
      })
    }

  }
  public eliminarElemento(id:any){
    console.log(id);
    this.httpService.deleteElemento(id).subscribe({
      next:res=>{},
      error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
    });
    delay(2000)
    window.location.reload()
  }
}
