import { Component, OnInit } from '@angular/core';
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos!: IProductoId[]
  constructor(private $firestore: FirestoreService) {
    
  }

  ngOnInit(): void {
    this.$firestore.getProductos().subscribe(a => {
      this.productos = a
    })
  }
  pro() {
    const producto: IProducto = {
      nombre: "Teclado",
      precio: Math.round(Math.random()*2000),
      descripcion: `descripcion ${Math.round(Math.random()*10)}`,
      categoria: `categoria ${Math.round(Math.random()*1000)}`
    }

    this.$firestore.addProducto(producto)
  }
}
