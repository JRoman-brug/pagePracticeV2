import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductosComponent } from './pages/administracion/admin-productos/admin-productos.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { Error404Component } from './pages/error404/error404.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';

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
    path: "InicioSesion", component: IniciarSesionComponent
  },
  {
    path: "PreguntasFrecuentes", component: PreguntasFrecuentesComponent
  },
  {
    path: "Prueba", component: PruebasComponent
  },
  // Usar chilldrens
  {
    path: "Administracion",component:AdministracionComponent,
    children:[
      {
        path:"Admin-Productos",component:AdminProductosComponent
      }
    ]
  },

  // Cargar por primera vez la pagina
  {
    path: '', redirectTo: 'Inicio', pathMatch: 'full'
  },
  // Error 404
  {
    path: "**", component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
