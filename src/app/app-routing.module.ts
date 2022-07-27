import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {RegistrarComponent} from './registrar/registrar.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import {DetalleComponent} from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"registrar",component:RegistrarComponent},
  {path:"productos",component:CatalogoComponent},
  {path:"",component:HomeComponent},
  {path:"producto/:id",component:DetalleComponent},
  {path:"home",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
