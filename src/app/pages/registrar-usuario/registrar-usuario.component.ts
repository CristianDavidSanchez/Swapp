import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private httpService:HttpService,public router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * registrarse
   */
  public registrarse() {
      this.usuarioNuevo.estado=true;
      if(this.usuarioNuevo.correo&&this.usuarioNuevo.contrasena&&this.usuarioNuevo.ciudad){
        this.httpService.postUsuario(this.usuarioNuevo).subscribe(
          {
            next: res => {
              if(res){
                console.log(res);
                this.router.navigate(['']);
              }else{
                this.snackBar.open("Correo ya existe ingrese uno nuevo","OK")
              }
            },
            error: error => {
                this.snackBar.open("Error de conexión con la base de datos intente de nuevo más tarde","OK")
            }
        }
        )
      }else{this.snackBar.open("No se puede registrar sin ingresar email contraseña y ciudad ","OK")}

  }

}
