import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrocadorGuard implements CanActivate {
  constructor(private router:Router){

	}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let result=false;
      let usuario:any=localStorage.getItem('user')
      if (usuario!=null){
        usuario=JSON.parse(usuario)
        if(usuario.rol.nombre=="trocador"){
          result=true;
        }else{
          result=false;
          this.router.navigate(['/adminPage']);
        }
        result=true;
      }else{
        result=false
      }
      return result;
  }
  
}
