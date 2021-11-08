import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-modal-edit-producto',
  templateUrl: './modal-edit-producto.component.html',
  styleUrls: ['./modal-edit-producto.component.scss']
})
export class ModalEditProductoComponent implements OnInit {

  // Id del producto
  id: any;
  // Estado del subida de la imagen
  estadoSubida: boolean = false;

  // Formulario
  formulario: FormGroup
  porcentaje: any = 0;

  image_path: string;

  // Categorias
  opciones: string[] = [
    "categoria1",
    "categoria2",
    "categoria3",
  ]

  imagen!: any;

  opcionSeleccionada!: string;
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private $productoServ: ProductoService,
    private $storage: StorageService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      precio: ["", Validators.required],
      categoria: ["", Validators.required],
      descripcion: ["", Validators.required],
      img: ["", Validators.required]
    })

    this.image_path = "";
  }

  // Cosas que tengo que hacer: poner un spin un hover

  ngOnInit() {
    // Obtengo el id del producto
    this.id = this.config.data.id

    // Obtengo el producto que estoy necesitando
    this.$productoServ.getProducto(this.id).subscribe(resp => {
      this.formulario.patchValue({
        nombre: resp.nombre,
        precio: resp.precio,
        categoria: resp.categoria,
        descripcion: resp.descripcion,
      })
      this.imagen = resp.img
    })
    this.formulario.value.img = this.imagen;
  }
  // Cierro el modal
  cancelModal() {
    this.ref.close()
  }

  // Acepto los cambios
  submit() {
    // Creo la nueva informacion
    const producto: IProducto = {
      nombre: this.formulario.value.nombre,
      precio: this.formulario.value.precio,
      categoria: this.formulario.value.categoria,
      descripcion: this.formulario.value.descripcion,
      img: this.formulario.value.img,
      img_path: this.image_path
    }

    // Actualizo la informacion
    this.$productoServ.updateProducto(this.id, producto)

    this.toast.success("Se actualizo correctamente el producto a la base de datos", "Se actualizo el producto", { positionClass: 'toast-bottom-right', closeButton: true })
    this.ref.close()
  }

  //Selecciono la imagen 
  async selectImage(event: any) {
    const file = event.target.files[0];
    this.image_path = file.name
    // Obtengo el base64 de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen = reader.result
    };


    // Subo la imagen
    // crea la referencia 

    let referencia = await this.$storage.referenciaCloudStorage(file.name);

    // sube la imagen
    this.$storage.tareaCloudStorage(file.name, file).percentageChanges().subscribe(resp => {
      // Comprueba el estado de subida de la imagen
      if (resp) {
        this.porcentaje = Math.round(resp)
        if (resp < 100) {
          this.estadoSubida = true;
        }
        else {
          this.estadoSubida = false;
        }
      }
    });

    await referencia.getDownloadURL().toPromise().then(resp => {
      this.formulario.value.img = resp
    })
  }

}
