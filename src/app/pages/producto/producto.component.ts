import { Component, OnInit } from '@angular/core';

// Librerias para nati
import { ActivatedRoute, Router } from '@angular/router';

// Interfaces
import { IProductoId } from 'src/app/interfaces/producto/producto';

// Services
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto!: IProductoId;
  id: string = "";
  constructor(
    private $productServ: ProductoService,
    private routeAct: ActivatedRoute,
    private route: Router
  ) {

    // obtengo por parametro el id que se necesito
    this.routeAct.params.subscribe(resp => {
      this.id = resp.id;
    })

    // Obtengo el producto de la base de datos
    this.$productServ.getProducto(this.id).subscribe(resp=>{
      this.producto = resp;
    })
  }

  ngOnInit(): void {
    // Verifico si es un producto real
    if (this.id.length !== 20) {
      this.route.navigate(['**'])
    }
  }

}
