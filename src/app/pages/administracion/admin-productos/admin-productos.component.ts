import { Component, OnInit } from '@angular/core';

// Toast
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';

// Interfaces producto
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';

// Services firebase productos
import { ProductoService } from 'src/app/services/producto/producto.service';
import { StorageService } from 'src/app/services/storage/storage.service';

// Modales
import { ModalAddProductoComponent } from 'src/app/modals/productos/modal-add-producto/modal-add-producto.component';
import { ModalEditProductoComponent } from 'src/app/modals/productos/modal-edit-producto/modal-edit-producto.component';
import { ModalCategoriaComponent } from 'src/app/shared/modal-categoria/modal-categoria.component';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.scss']
})
export class AdminProductosComponent implements OnInit {

  productos!: IProducto[];
  constructor(private $productoServ: ProductoService,
    private toast: ToastrService,
    public dialogService: DialogService,
    private $storage: StorageService
  ) {

  }

  ngOnInit(): void {
    this.updateProductos()
  }

  // Actualizo los producto
  updateProductos() {
    this.$productoServ.getProductos().subscribe(resp => {
      this.productos = resp
    })
  }
  // Modal editar producto
  AddProducto() {
    this.dialogService.open(ModalAddProductoComponent, {
      header: "Agregar un producto"
    })
  }

  // Modal editar producto
  editProducto(id: string) {
    this.dialogService.open(ModalEditProductoComponent, {
      data: {
        id: id
      },
      header: "Editar producto"
    })
    
  }

  // Modal administrar categorias
  adminCategorias(){
    this.dialogService.open(ModalCategoriaComponent, {
      header: "Agregar un producto"
    })
  }
  // Eliminar producto
  deleteProducto(id: string) {
    this.$productoServ.deleteProducto(id).then(()=>{
      // this.$productoServ.getProducto(id).subscribe(resp=>{
      //   imagen_path = resp.img_path;
      // })

      // this.$storage.eliminarArchivo(imagen_path)
    })
    this.toast.error("El producto se elimino correctamente", "El producto se elimino", { positionClass: 'toast-bottom-right', closeButton: true })
  }
}
