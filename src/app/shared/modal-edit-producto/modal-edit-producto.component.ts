import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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

  id: any;
  producto!: IProductoId
  formulario: FormGroup
  porcentaje:any = 0;
  opciones: string[] = [
    "categoria1",
    "categoria2",
    "categoria3",
  ]

  imagen!:any;

  opcionSeleccionada!: string;
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private $productoServ: ProductoService,
    private $storage: StorageService,
    private fb: FormBuilder,
    private _sanitizer: DomSanitizer
  ) {
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      precio: ["", Validators.required],
      categoria: ["", Validators.required],
      descripcion: ["", Validators.required],
      img: ["", Validators.required]
    })
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
        img: resp.img
      })
      this.imagen = resp.img
    })

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
    }

    // Actualizo la informacion
    this.$productoServ.updateProducto(this.id, producto)

    this.ref.close()
  }

  //Selecciono la imagen 
  async selectImage(event: any) {
    const file = event.target.files[0];

    // Obtengo el base64 de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen = reader.result
    }; 


    // Subo la imagen
    // crea la referencia 
    let reference = await this.$storage.referenciaCloudStorage(file.name);
    
    // sube la imagen
    this.$storage.tareaCloudStorage(file.name, file).percentageChanges().subscribe(resp=>{
      this.porcentaje = resp
    }); 

    await reference.getDownloadURL().toPromise().then(url=>{
      this.formulario.value.img = url
    })
  }

}
