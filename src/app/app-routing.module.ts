import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { MasBuscadosComponent } from './mas-buscados/mas-buscados.component';

const routes: Routes = [
  {
   path: '', component: HomeComponent 
  },
  {
    path: 'masBuscados', component: MasBuscadosComponent
  },
  {
    path: 'farmacias', component: FarmaciasComponent
  },
  {
    path:'busqueda/:medicamento', component: BusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
