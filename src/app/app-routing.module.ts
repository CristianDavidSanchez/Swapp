import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { TrocadorGuard } from './guards/trocador.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
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
        path:'registrarse',
        component:RegistrarUsuarioComponent,
      },
      {
        path:'misTrueques',
        canActivate:[AuthGuard,TrocadorGuard],
        component:MisTruequesComponent,
      },
      {
        path:'elementos',
        canActivate:[AuthGuard,TrocadorGuard],
        component:CatalogoElementosComponent,
      },
      {
        path:'registrarElemento',
        canActivate:[AuthGuard,TrocadorGuard],
        component:RegistrarElementoComponent,
      },
      {
        path:'misElementos',
        canActivate:[AuthGuard,TrocadorGuard],
        component:MisElementosComponent,
      },
      {
        path:'adminPage',
        canActivate:[AuthGuard,AdminGuard],
        component:AdminPageComponent,
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
