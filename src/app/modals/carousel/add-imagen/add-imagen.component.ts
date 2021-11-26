import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ICarousel } from 'src/app/interfaces/carousel/carousel';
import { CarouselService } from 'src/app/services/carousel/carousel.service';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.component.html',
  styleUrls: ['./add-imagen.component.scss']
})
export class AddImagenComponent implements OnInit {
  // Imagen
  imagen: any ="../../../../assets/previsualizacion__imagen.png";
  // Ruta de la imagen de firebase
  imagen_path: string;

  referencia: any;
  // Estado de la descargar (desabilita el boton de aceptar)
  stateDownload: boolean = false;

  imagenRefe: string;
  constructor(
    private $carouselServ: CarouselService,
    private ref: DynamicDialogRef,
    private toast:ToastrService

  ) {
    this.imagen_path = ""
    this.imagenRefe = "";
  }

  ngOnInit(): void {
  }

  // cierra el modal
  closeModal() {
    this.ref.close()
  }

  async submit() {

    // Armo el objeto del carousel
    const imagen: ICarousel = {
      imagen: this.imagenRefe
    }

    this.$carouselServ.addImagen(imagen);
    this.toast.success("Se guardaron los datos del negocio correctamente","Se guardaron correctamente los datos",{positionClass:"toast-bottom-right",closeButton:true})

    this.closeModal();
  }

  
  //Selecciono la imagen 
  async selectImage(event: any) {

    // Cambio el estado para bloquear el boton
    this.stateDownload = true;

    // Obtengo el archivo de la imagen
    const file = event.target.files[0];

    this.imagen_path = file.name;
    // Obtengo el base64 de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen = reader.result
    };


    // Subo la imagen
    // Crea la referencia


    this.referencia = this.$carouselServ.referenciaCloudStorage(file.name);

    // sube la imagen
    await this.$carouselServ.tareaCloudStorage(file.name, file);

    await this.referencia.getDownloadURL().toPromise().then((resp: any) => {
      this.imagenRefe = resp;
    })
    // Cambio el estado para bloquear el boton
    this.stateDownload = false;
  }
}
