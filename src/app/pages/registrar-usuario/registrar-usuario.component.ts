import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/negocio.model';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  email:string = '';
  password:string='';
  categorias:Categoria[]=[];
  usuarioNuevo:Usuario=new Usuario();
  constructor(private httpService:HttpService,public router:Router) { }

  ngOnInit(): void {
    this.httpService.getCategorias().subscribe(
      res=>{this.categorias=res
      console.log(this.categorias)
      }
    )
  }

  /**
   * registrarse
   */
  public registrarse() {
      this.usuarioNuevo.estado=true;
      this.httpService.postUsuario(this.usuarioNuevo).subscribe(
        res=>{
          if(res){this.router.navigate(['']);}
          }
      )
  }

}
