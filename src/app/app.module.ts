import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Variables de entorno
import { environment } from 'src/environments/environment';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Toast ngx-toastr
import { ToastrModule } from 'ngx-toastr';

// Swiper
import { SwiperModule } from 'swiper/angular';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //autenticacion 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; //Database
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //Almacenamiento 

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


// PrimeNG services
import { ConfirmationService } from 'primeng/api';
import { FilterService } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';

// Pipe filtar productos

// Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { AdminProductosComponent } from './pages/administracion/admin-productos/admin-productos.component';
import { ModalEditProductoComponent } from './shared/modal-edit-producto/modal-edit-producto.component';
import { ModalAddProductoComponent } from './shared/modal-add-producto/modal-add-producto.component';
import { ModalCategoriaComponent } from './shared/modal-categoria/modal-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    FooterComponent,
    InicioComponent,
    Error404Component,
    ProductoComponent,
    IniciarSesionComponent,
    PreguntasFrecuentesComponent,
    PruebasComponent,
    AdministracionComponent,
    AdminProductosComponent,
    ModalEditProductoComponent,
    ModalAddProductoComponent,
    ModalCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Formularios
    FormsModule,
    ReactiveFormsModule,

    // Toast ngx-toastr
    ToastrModule.forRoot({
      preventDuplicates: true,
      countDuplicates: true
    }),

    // Swiper
    SwiperModule,

    //Firebase 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    // PrimeNG
    MenubarModule,
    DropdownModule,

    // PrimeNG inputs
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    // PrimeNG botones
    ButtonModule,
    SpeedDialModule,
    // Panel
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    // Media
    ConfirmDialogModule,
    ImageModule,
    CarouselModule,
    // Data
    DataViewModule,
    TableModule,
    //Menu
    TabMenuModule,
    //Overlay
    DialogModule,
    DynamicDialogModule,
    // Misc
    ProgressSpinnerModule
  ],
  entryComponents: [
    ModalEditProductoComponent
  ],
  providers: [
    ConfirmationService,
    FilterService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
