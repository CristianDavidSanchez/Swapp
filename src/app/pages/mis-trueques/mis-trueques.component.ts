import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mis-trueques',
  templateUrl: './mis-trueques.component.html',
  styleUrls: ['./mis-trueques.component.css']
})
export class MisTruequesComponent implements OnInit {
  usuarios:Usuario[]=[];
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(
      res=>{
        console.log(res)}
    )
  }

}
