import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';
import { ICarousel, ICarouselId } from 'src/app/interfaces/carousel/carousel';
import { AddImagenComponent } from 'src/app/modals/carousel/add-imagen/add-imagen.component';
import { CarouselService } from 'src/app/services/carousel/carousel.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.scss']
})
export class AdminInicioComponent implements OnInit {

  imagenes!: ICarouselId[];

  // Configuracion del carousel
  configCarousel: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    autoplay: true,
  };

  constructor(
    private $carouselServ: CarouselService,
    private dialogService: DialogService,
    private toast:ToastrService
  ) {
    // Obtengo las imaganes de firestore
    $carouselServ.getImagenes().subscribe(resp => {
      this.imagenes = resp;
    })
  }

  ngOnInit(): void {
  }

  // Agrego una imagen
  addImagen() {
    this.dialogService.open(AddImagenComponent,{header:"Agregar imagen"})
   
  }

  // Elimino una imagen
  deleteImagen(id: string) {
    this.toast.error("Se elimino correctamente la imagen del carousel", "Se elimino correctamente",{positionClass:"toast-bottom-right", closeButton: true })
    this.$carouselServ.deleteImagen(id);
  }
}
