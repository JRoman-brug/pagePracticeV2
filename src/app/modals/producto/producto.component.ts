import { CurrencyPipe } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {


  id!:string;
  producto!:IProductoId;
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private $productoServ:ProductoService
  ) { }

  ngOnInit(): void {
    // Obtengo el id del producto
    this.id = this.config.data.id
    // Obtengo el producto
    
    this.$productoServ.getProducto(this.id).subscribe(resp=>{
      this.producto = resp
    })
  }

}
