import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { Error404Component } from './pages/error404/error404.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: "Inicio", component: InicioComponent
  },
  {
    path: "Productos", component: ProductosComponent
  },
  {
    path: "Producto/:id", component: ProductoComponent
  },
  {
    path:"InicioSesion",component:IniciarSesionComponent
  },
  {
    path:"PreguntasFrecuentes",component:PreguntasFrecuentesComponent
  },
  {
    path: "AgregarProducto", component: AgregarProductoComponent
  },
  // Usar chilldrens
  {
    path:"", component:AgregarProductoComponent,
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
