import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ErrorAlertComponent } from 'src/app/components/error-alert/error-alert.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario=new Usuario();

  constructor(private httpService:HttpService,public router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  public login(){
    if (this.usuario){
      this.httpService.postLog(this.usuario).subscribe(
        res=>{
          if(res){
            const loggedUser:Usuario=res;
            localStorage.setItem('user',JSON.stringify(loggedUser));
            this.router.navigate(['elementos']);
          }else{
            this.snackBar.openFromComponent(ErrorAlertComponent,{
              duration: 2000,
            })
          }
        }
      )
    }
  }
}
