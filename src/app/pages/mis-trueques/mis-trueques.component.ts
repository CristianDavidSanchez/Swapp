import { Component, OnInit } from '@angular/core';
import { Trueque } from 'src/app/models/negocio.model';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mis-trueques',
  templateUrl: './mis-trueques.component.html',
  styleUrls: ['./mis-trueques.component.css']
})
export class MisTruequesComponent implements OnInit {
  displayedColumns: string[] = ['id','elementoSolicitado','ofrecido','solicitante','solicitado','ciudadDestino','ciudadOrigen','precioLogistica','actions'];
  usuarios:Usuario[]=[];
  trueques:Trueque[]=[];
  loggedUser:Usuario=new Usuario();

  constructor(private httpService:HttpService) {
    let usuario:any=localStorage.getItem('user');
    if (localStorage.getItem('user')!=null){this.loggedUser=JSON.parse(usuario);}
   }

  ngOnInit(): void {
    if(this.loggedUser!=undefined){
      let userId= this.loggedUser.id;
      this.httpService.getTruequesByUser(userId!).subscribe(
        res=>{this.trueques=res;
          console.log(this.trueques);
        }
      )
    }
  }

  public aceptarTrueque(truequeId:number){
    this.httpService.aceptarTrueque(truequeId).subscribe(res=>console.log(res))
  }
  public rechazarTrueque(truequeId:number){
    this.httpService.rechazarTrueque(truequeId).subscribe(res=>console.log(res))
  }
  public cancelarTrueque(truequeId:number){
    this.httpService.cancelarTrueque(truequeId).subscribe(res=>console.log(res))
  }
  public finalizarTrueque(truequeId:number){
    this.httpService.finalizarTrueque(truequeId).subscribe(res=>console.log(res))
  }

}
