import { Component, OnInit } from '@angular/core';
import { ICarouselId } from 'src/app/interfaces/carousel/carousel';
import { CarouselService } from 'src/app/services/carousel/carousel.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  productos: number[] = [1, 2, 3, 4, 5, 6, 7];
  imagenes!: ICarouselId[];
  constructor(private $carouselServ: CarouselService) {
    // Obtengo las imagenes del carousel de firestore
    $carouselServ.getImagenes().subscribe(resp => {
      this.imagenes = resp
    })
  }

  ngOnInit(): void {
    console.log(this.imagenes)
  }


  configCarousel: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    autoplay: true,
  };

  confiCarouselProductos: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    navigation: true,
    autoplay: true,
    loop: true,
    centeredSlides: true
  };
}
