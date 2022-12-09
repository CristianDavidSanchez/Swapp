import { Component, OnInit } from '@angular/core';
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
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getTrueques().subscribe(
      res=>{this.trueques=res;
        console.log(this.trueques);
      }
    )
  }
}
