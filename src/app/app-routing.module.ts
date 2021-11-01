import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { Error404Component } from './pages/error404/error404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: "Productos", component: ProductosComponent
  },
  {
    path: "Inicio", component: InicioComponent
  },
  {
    path: "AgregarProducto", component: AgregarProductoComponent
  },
  {
    path: "Producto/:id", component: ProductoComponent
  },
  { 
    path: '', redirectTo: 'Inicio', pathMatch: 'full' 
  },
  {
    path:"**", component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
