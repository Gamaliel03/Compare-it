import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { MasBuscadosComponent } from './mas-buscados/mas-buscados.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncabezadoComponent,
    HomeComponent,
    MasBuscadosComponent,
    FarmaciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
