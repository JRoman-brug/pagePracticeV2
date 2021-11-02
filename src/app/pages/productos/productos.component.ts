import { Component, OnInit } from '@angular/core';

// Interfaces
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';

// Firebase servicio de base de datos
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

// PrimeNG servicio para filtrar
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  OpcionesPrecio!: SelectItem[];

  sortOrder!: number;
  sortField!: string;
  
  productos!: IProductoId[]
  constructor(private $firestore: FirestoreService, private route:Router) {
  }

  ngOnInit(): void {
    // obtengo los productos de la base de datos
    this.$firestore.getProductos().subscribe(resp => {
      this.productos = resp;
    })

    // Inicializo las opcion para ordenar los precios
    this.OpcionesPrecio = [
      { label: 'De mayor a menor', value: '!precio' },
      { label: 'De menor a mayor', value: 'precio' }
    ];
  }


  // Metodo para ordenar por precio
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  verProducto(id:string){
    this.route.navigate(['Producto',id])
  }
}
