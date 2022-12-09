import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/models/user.model';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedUser:Usuario=new Usuario();
  constructor(private router:Router) { 
    let usuario:any=localStorage.getItem('user')
    if (localStorage.getItem('user')!=null){this.loggedUser=JSON.parse(usuario);}
  }

  ngOnInit(): void {
  }
  public logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
