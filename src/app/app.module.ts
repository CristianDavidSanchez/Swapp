import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavComponent } from './components/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { MisElementosComponent } from './pages/mis-elementos/mis-elementos.component';
import { MisTruequesComponent } from './pages/mis-trueques/mis-trueques.component';
import { RegistrarElementoComponent } from './pages/registrar-elemento/registrar-elemento.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CatalogoElementosComponent } from './pages/catalogo-elementos/catalogo-elementos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    MisElementosComponent,
    MisTruequesComponent,
    RegistrarElementoComponent,
    LayoutComponent,
    CatalogoElementosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
