import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CatalogoElementosComponent } from './pages/catalogo-elementos/catalogo-elementos.component';
import { LoginComponent } from './pages/login/login.component';
import { MisElementosComponent } from './pages/mis-elementos/mis-elementos.component';
import { MisTruequesComponent } from './pages/mis-trueques/mis-trueques.component';
import { RegistrarElementoComponent } from './pages/registrar-elemento/registrar-elemento.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/login',
        pathMatch: 'full'
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'registry',
        component:RegistrarUsuarioComponent,
      },
      {
        path:'misTrueques',
        component:MisTruequesComponent,
      },
      {
        path:'elementos',
        component:CatalogoElementosComponent,
      },
      {
        path:'misElementos',
        component:MisElementosComponent,
        children:[
          {
            path:'registrarElemento',
            component:RegistrarElementoComponent
          }
        ]
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
