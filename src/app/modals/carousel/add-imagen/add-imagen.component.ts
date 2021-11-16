import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ICarousel } from 'src/app/interfaces/carousel/carousel';
import { CarouselService } from 'src/app/services/carousel/carousel.service';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.component.html',
  styleUrls: ['./add-imagen.component.scss']
})
export class AddImagenComponent implements OnInit {

  imagen!: any;
  imagen_path: string;

  referencia:any;

  imagenRefe: string;
  constructor(
    private $carouselServ: CarouselService,
    private ref: DynamicDialogRef,

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
    await this.referencia.getDownloadURL().toPromise().then((resp:any) => {
      this.imagenRefe = resp;
    })
    const imagen: ICarousel = {
      imagen:this.imagenRefe
    }

    this.$carouselServ.addImagen(imagen);

    this.closeModal();
  }
  //Selecciono la imagen 
  async selectImage(event: any) {
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
    await this.$carouselServ.tareaCloudStorage(file.name, file)

    
  }
}
