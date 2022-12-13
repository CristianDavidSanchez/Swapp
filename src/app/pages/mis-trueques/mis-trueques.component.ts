import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';
import { Trueque } from 'src/app/models/negocio.model';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mis-trueques',
  templateUrl: './mis-trueques.component.html',
  styleUrls: ['./mis-trueques.component.css']
})
export class MisTruequesComponent implements OnInit {
  displayedColumns: string[] = ['id','elementoSolicitado','ofrecido','solicitante','solicitado','ciudadDestino','ciudadOrigen','precioLogistica','estado','actions'];
  usuarios:Usuario[]=[];
  trueques:Trueque[]=[];
  loggedUser:Usuario=new Usuario();

  constructor(private httpService:HttpService,private snackBar: MatSnackBar) {
    let usuario:any=localStorage.getItem('user');
    if (localStorage.getItem('user')!=null){this.loggedUser=JSON.parse(usuario);}
   }

  ngOnInit(): void {
    if(this.loggedUser!=undefined){
      let userId= this.loggedUser.id;
      this.httpService.getTruequesByUser(userId!).subscribe(
        res=>{this.trueques=res;
        }
      )
    }
  }

  public aceptarTrueque(truequeId:number){
    this.httpService.aceptarTrueque(truequeId).subscribe({
      next:res=>{},
      error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
    })
    delay(5000)
    window.location.reload()
  }
  public rechazarTrueque(truequeId:number){
    this.httpService.rechazarTrueque(truequeId).subscribe({
      next:res=>{},
      error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
    })
    delay(5000)
    window.location.reload()
  }
  public cancelarTrueque(truequeId:number){
    this.httpService.cancelarTrueque(truequeId).subscribe({
      next:res=>{},
      error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
    })
    delay(5000)
    window.location.reload()
  }
  public finalizarTrueque(truequeId:number){
    this.httpService.finalizarTrueque(truequeId).subscribe({
      next:res=>{},
      error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
    })
    delay(5000)
    window.location.reload()
  }

}
