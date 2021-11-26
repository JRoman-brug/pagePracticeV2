import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ICarouselId } from 'src/app/interfaces/carousel/carousel';
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';
import { ProductoComponent } from 'src/app/modals/producto/producto.component';
import { CarouselService } from 'src/app/services/carousel/carousel.service';
import { ProductoService } from 'src/app/services/producto/producto.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  items!: MenuItem[];
  // Imagenes del carousel
  imagenes!: ICarouselId[];

  // Productos del carousel
  productos!: IProductoId[];
  constructor(
    private $carouselServ: CarouselService,
    private $productoServ: ProductoService,
    public dialogService: DialogService,
  ) {
    // Obtengo las imagenes del carousel de firestore
    $carouselServ.getImagenes().subscribe(resp => {
      this.imagenes = resp
    })
    // Obtengo los productos del carousel 
    $productoServ.getProductosCarousel().subscribe(resp => {
      this.productos = resp
    })


  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

  // Configuracion del carousel
  configCarousel: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    autoplay: true,
  };

  // Configuracion del carousel de productos
  confiCarouselProductos: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    navigation: true,
    autoplay: true,
    loop: true,
    centeredSlides: true
  };

  abrirProducto(id:string){
    this.dialogService.open(ProductoComponent,{
      data:{
        id:id
      }
    })
  }
}
