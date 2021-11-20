import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ICategoria, ICategoriaId } from 'src/app/interfaces/categoria/categoria';
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
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

  // Estado de la descargar (desabilita el boton de aceptar)
  stateDownload: boolean = false;

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
  categorias!: ICategoriaId[]

  // Imagen
  imagen!: any;


  // Referencia de la imagen
  referencia: any;
  opcionSeleccionada!: string;
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private $productoServ: ProductoService,
    private $storage: StorageService,
    private $categoriaServ: CategoriasService,
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
    // // Obtengo las categorias
    // this.$categoriaServ.getCategorias().subscribe(resp=>{
    //   this.categorias = resp
    // })

  }


  ngOnInit() {
    // Obtengo las categorias
    this.opciones = []
    this.$categoriaServ.getCategorias().subscribe(resp => {
      this.categorias = resp
      for (let categoria of this.categorias) {
        this.opciones.push(categoria.categoria)
      }
    })
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
      // Obtengo la imagen
      this.imagen = resp.img
    })
    this.formulario.value.img = this.imagen;




  }
  // Cierro el modal
  cancelModal() {
    this.ref.close()
  }

  // Acepto los cambios
  async submit() {
    await this.referencia.getDownloadURL().toPromise().then((resp: any) => {
      this.formulario.value.img = resp
    })
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

    // Cambio el estado para bloquear el boton
    this.stateDownload = true;

    // Obtengo la imagen
    const file = event.target.files[0];
    // Nombre de la imagen
    this.image_path = file.name
    // Obtengo el base64 de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen = reader.result
    };


    // Subo la imagen
    // crea la referencia 

    this.referencia = await this.$storage.referenciaCloudStorage(file.name);

    // sube la imagen
    this.$storage.tareaCloudStorage(file.name, file)

    // sube la imagen
    await this.$storage.tareaCloudStorage(file.name, file);

    await this.referencia.getDownloadURL().toPromise().then((resp: any) => {
      this.formulario.value.img = resp;
    })
    // Cambio el estado para bloquear el boton
    this.stateDownload = false;
  }

}
