import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportes } from './components/padre-deportes/padre-deportes';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "listaProductos", component: ListaProductosComponent },
  { path: "padrecoches", component: PadreCochesComponent },
  { path: "deportes", component: PadreDeportes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
