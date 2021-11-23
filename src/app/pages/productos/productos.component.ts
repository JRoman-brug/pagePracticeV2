import { Component, OnInit } from '@angular/core';

// Interfaces
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';

// Firebase servicio de base de datos
import { ProductoService } from 'src/app/services/producto/producto.service';

// PrimeNG servicio para filtrar
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { IPreguntaId } from 'src/app/interfaces/pregunta/pregunta';
import { ICategoria, ICategoriaId } from 'src/app/interfaces/categoria/categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  // Opciones
  opciones: string[] = [];
  categorias!: ICategoriaId[]
  opcionSeleccionada: any = null;

  // Opciones para ordenar por precio
  OpcionesPrecio!: SelectItem[];

  sortOrder!: number;
  sortField!: string;

  productos!: IProductoId[]
  constructor(
    private $ProductoServ: ProductoService, 
    private route: Router,
    private $categoriaServ:CategoriasService
    ) {
  }

  ngOnInit(): void {

    this.opciones = []
    this.$categoriaServ.getCategorias().subscribe(resp=>{
      this.categorias = resp
      for (let categoria of this.categorias) {
        this.opciones.push(categoria.categoria) 
      }
    })
    // obtengo los productos de la base de datos
    this.changeProductos()

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
  verProducto(id: string) {
    this.route.navigate(['Producto', id])
  }

  changeProductos() {
    this.$ProductoServ.getProductos(this.opcionSeleccionada).subscribe(resp => {
      this.productos = resp;
    })
    console.log(this.productos)
  }

  cleanOption() {
    this.opcionSeleccionada = null;
    this.changeProductos()
  }



}
