import { Component, OnInit } from '@angular/core';

// Toast
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';

// Interfaces producto
import { IProducto } from 'src/app/interfaces/producto/producto';

// Services firebase productos
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ModalEditProductoComponent } from 'src/app/shared/modal-edit-producto/modal-edit-producto.component';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.scss']
})
export class AdminProductosComponent implements OnInit {

  productos!: IProducto[];
  constructor(private $productoServ: ProductoService, private toast: ToastrService, public dialogService: DialogService) {

  }

  ngOnInit(): void {
    this.updateProductos()
  }

  updateProductos() {
    this.$productoServ.getProductos().subscribe(resp => {
      this.productos = resp
    })
  }
  // Borrar porque esto estara en un modal
  addProducto() {
    const producto: IProducto = {
      nombre: "patos lucas2",
      precio: 777,
      categoria: "categoria1",
      descripcion: "es el pato lucas",
      img: "https://firebasestorage.googleapis.com/v0/b/crud-d7599.appspot.com/o/productos%2Fimages.jpg?alt=media&token=0560313d-5a68-440f-ae28-b22924cf5f9f",

    }

    this.$productoServ.addProducto(producto)
  }


  // Open modal
  openModal(id:string) {
    const ref = this.dialogService.open(ModalEditProductoComponent, {
      data:{
        id:id
      },
      header:"Editar producto"
    })
  }

  // Eliminar producto
  deleteProducto(id: string) {
    this.$productoServ.deleteProducto(id);
    this.toast.error("El producto se elimino correctamente", "El producto se elimino", { positionClass: 'toast-bottom-right', closeButton:true })
  }
}
