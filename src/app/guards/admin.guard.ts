import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router){

	}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let result=false;
      let usuario:any=localStorage.getItem('user')
      if (usuario!=null){
        usuario=JSON.parse(usuario)
        if(usuario.rol.nombre=="admin"){
          result=true;
        }else{
          result=false;
          this.router.navigate(['/elementos']);
        }
        result=true;
      }else{
        result=false
      }
      return result;
  }
  
}
