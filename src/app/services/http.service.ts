import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/user.model';
import { Categoria, ElementoTrueque, Trueque } from '../models/negocio.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected http:HttpClient) { }
  public getUsers(): Observable<Usuario> {
		return this.http.get<Usuario>(environment.API + '/Usuarios');
	}
  public getCategorias(): Observable<Categoria[]> {
		return this.http.get<Categoria[]>(environment.API + '/Categorias');
	}
  public postLog(usuario:Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(environment.API+"/Log",usuario)	
  }
  public postUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(environment.API+"/nuevoUsuario",usuario)
  }
  public getElementos():Observable<ElementoTrueque[]>{
		return this.http.get<ElementoTrueque[]>(environment.API + '/ElementosTrueque');
  }
  public solicitarTrueque(trueque:Trueque):Observable<Trueque>{
    return this.http.post<Trueque>(environment.API+"/nuevoTrueque",trueque)	
  }
  public getElementosByUser(id:number):Observable<ElementoTrueque[]>{
		return this.http.get<ElementoTrueque[]>(environment.API + '/ElementosUsuarios/'+id);
  }
  public deleteElemento(id:number):Observable<String>{
		return this.http.delete<String>(environment.API + '/ElementosTrueque/'+id);
  }
  public postElemento(elemento:ElementoTrueque): Observable<Usuario>{
    return this.http.post<Usuario>(environment.API+"/nuevoElementoTrueque",elemento)
  }
  public getTruequesByUser(id:number):Observable<Trueque[]>{
		return this.http.get<Trueque[]>(environment.API + '/Trueques/'+id);
  }
  public aceptarTrueque(id:number):Observable<String>{
    return this.http.put<String>(environment.API + '/Trueque/Aceptar/'+id,{})
  }
  public rechazarTrueque(id:number):Observable<String>{
    return this.http.put<String>(environment.API + '/Trueque/Rechazar/'+id,{})
  }
  public finalizarTrueque(id:number):Observable<String>{
    return this.http.put<String>(environment.API + '/Trueque/Finalizar/'+id,{})
  }
  public cancelarTrueque(id:number):Observable<String>{
    return this.http.put<String>(environment.API + '/Trueque/Cancelar/'+id,{})
  }
}
