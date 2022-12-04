import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected http:HttpClient) { }
  public getUsers(): Observable<Usuario> {
		return this.http.get<Usuario>(environment.API + '/Usuarios');
	}
  public postLog(usuario:Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(environment.API+"/Log",usuario)	}
}
