import { Component, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  productos:number[] = [1,2,3,4,5,6,7 ] 
  imagenes: string[] = ["assets/NIKE_BANNER.png", "assets/82cc9b78-1585-44a5-9b07-d89f75f44327-profile_banner-480.jpeg","assets/38fb24becd9a52b0278f6e2a8f5d2315.jpg"]
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.imagenes)
  }


  configCarousel: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    autoplay: true,
    loop: true,
  };

  confiCarouselProductos:SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    navigation: true,
    autoplay: true,
    loop: true,
    centeredSlides: true
  };
}
