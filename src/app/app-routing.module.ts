import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path:"Productos",component:ProductosComponent
  },
  {
    path:"AgregarProducto",component:AgregarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
