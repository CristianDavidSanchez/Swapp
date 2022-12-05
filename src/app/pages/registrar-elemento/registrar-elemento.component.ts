import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';

@Component({
  selector: 'app-registrar-elemento',
  templateUrl: './registrar-elemento.component.html',
  styleUrls: ['./registrar-elemento.component.css']
})
export class RegistrarElementoComponent implements OnInit {
  usuarioNuevo:Usuario=new Usuario;
  constructor() { }

  ngOnInit(): void {
  }

}
