import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Trueque } from 'src/app/models/negocio.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  trueques:Trueque[]=[];
  displayedColumns: string[] = ['id','elementoSolicitado','ofrecido','solicitante','solicitado','ciudadDestino','ciudadOrigen','precioLogistica','estado'];
  constructor(private httpService:HttpService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.httpService.getTrueques().subscribe({
      next:res=>{this.trueques=res;
        console.log(this.trueques);
      },
      error:error=>{this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")}
    })
  }
  public generarReporte(){
    window.location.href = 'http://127.0.0.1:8080/Trueques/reporte';
  }
}
