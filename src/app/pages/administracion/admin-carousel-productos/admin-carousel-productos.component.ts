import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProducto } from 'src/app/interfaces/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-admin-carousel-productos',
  templateUrl: './admin-carousel-productos.component.html',
  styleUrls: ['./admin-carousel-productos.component.scss']
})
export class AdminCarouselProductosComponent implements OnInit {

  productos!: IProducto[];
  constructor(
    private $productoServ: ProductoService,
    private toast: ToastrService
  ) {
    this.$productoServ.getProductos().subscribe(resp => {
      this.productos = resp
    })
  }

  ngOnInit(): void {
  }

  agregarProductoCarousel(id:string, carouselState:boolean) {
    if(carouselState){
      const carousel:IProducto = {
        carousel:false,
      }
      this.$productoServ.updateProducto(id, carousel)
    }
    else{
      const carousel:IProducto = {
        carousel:true,
      }
      this.$productoServ.updateProducto(id, carousel)
    }
    console.log(carouselState)
  }
}
