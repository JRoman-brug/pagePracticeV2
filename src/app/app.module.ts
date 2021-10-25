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
import {DataViewModule} from 'primeng/dataview';

// PrimeNG services
import { ConfirmationService } from 'primeng/api';
import {FilterService} from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Formularios
    FormsModule,
    ReactiveFormsModule,

    // Toast ngx-toastr
    ToastrModule.forRoot(),

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
    // Data
    DataViewModule

  ],
  providers: [
    ConfirmationService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
