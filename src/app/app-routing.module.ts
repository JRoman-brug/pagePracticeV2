import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './modals/iniciar-sesion/iniciar-sesion.component';
import { AdminCarouselProductosComponent } from './pages/administracion/admin-carousel-productos/admin-carousel-productos.component';
import { AdminInicioComponent } from './pages/administracion/admin-inicio/admin-inicio.component';
import { AdminPreguntasFrecuentesComponent } from './pages/administracion/admin-preguntas-frecuentes/admin-preguntas-frecuentes.component';
import { AdminProductosComponent } from './pages/administracion/admin-productos/admin-productos.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { Error404Component } from './pages/error404/error404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { ProductosComponent } from './pages/productos/productos.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { AdminDatosLocalComponent } from './pages/administracion/admin-datos-local/admin-datos-local.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['Inicio']);


const routes: Routes = [
  {
    path: "Inicio", component: InicioComponent
  },
  {
    path: "Productos", component: ProductosComponent
  },
  {
    path: "InicioSesion", component: IniciarSesionComponent
  },
  {
    path: "PreguntasFrecuentes", component: PreguntasFrecuentesComponent
  },
  {
    path: "Administracion",component:AdministracionComponent,
    canActivate:[AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children:[
      {
        path:"Admin-Productos",component:AdminProductosComponent
      },
      {
        path:"Admin-Inicio",component:AdminInicioComponent
      },
      {
        path:"Admin-Preguntas-Frecuentes",component:AdminPreguntasFrecuentesComponent
      },
      {
        path:"Admin-Carouse-Productos",component:AdminCarouselProductosComponent
      },
      {
        path:"Admin-datos-local",component:AdminDatosLocalComponent
      },
      {
        path:"",component:AdminInicioComponent, pathMatch:"full"
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
