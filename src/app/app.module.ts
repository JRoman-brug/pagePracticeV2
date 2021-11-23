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
import { ProgressSpinnerModule } from 'primeng/progressspinner';


// PrimeNG services
import { ConfirmationService } from 'primeng/api';
import { FilterService } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';

// Pipe filtar productos

// Componentes
import { AppComponent } from './app.component';

// Pages
import { ProductosComponent } from './pages/productos/productos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';

// Shared
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MosaicoComponent } from './shared/mosaico/mosaico.component';

// Modals
import { AddImagenComponent } from './modals/carousel/add-imagen/add-imagen.component';
import { PreguntasFrecuentesAgregarComponent } from './modals/preguntasFrecuentes/preguntas-frecuentes-agregar/preguntas-frecuentes-agregar.component';
import { PreguntasFrecuentesEditarComponent } from './modals/preguntasFrecuentes/preguntas-frecuentes-editar/preguntas-frecuentes-editar.component';
import { ModalCategoriaComponent } from './modals/categoria/modal-categoria/modal-categoria.component';
import { ModalAddProductoComponent } from './modals/productos/modal-add-producto/modal-add-producto.component';
import { ModalEditProductoComponent } from './modals/productos/modal-edit-producto/modal-edit-producto.component';
import { IniciarSesionComponent } from './modals/iniciar-sesion/iniciar-sesion.component';

// Sector de administración
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { AdminInicioComponent } from './pages/administracion/admin-inicio/admin-inicio.component';
import { AdminProductosComponent } from './pages/administracion/admin-productos/admin-productos.component';
import { AdminPreguntasFrecuentesComponent } from './pages/administracion/admin-preguntas-frecuentes/admin-preguntas-frecuentes.component';
import { AdminCarouselProductosComponent } from './pages/administracion/admin-carousel-productos/admin-carousel-productos.component';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    ProductosComponent,
    InicioComponent,
    Error404Component,
    ProductoComponent,
    PreguntasFrecuentesComponent,

    // Shared
    MenuComponent,
    FooterComponent,
    MosaicoComponent,


    // Sector de administracion
    AdministracionComponent,
    AdminProductosComponent,
    AdminInicioComponent,
    AdminPreguntasFrecuentesComponent,
    AdminCarouselProductosComponent,
    
    // Modal
    PreguntasFrecuentesAgregarComponent,
    PreguntasFrecuentesEditarComponent,
    ModalEditProductoComponent,
    ModalAddProductoComponent,
    ModalCategoriaComponent,
    AddImagenComponent,
    IniciarSesionComponent,


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
