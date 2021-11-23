import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ICategoriaId } from 'src/app/interfaces/categoria/categoria';
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { StorageService } from 'src/app/services/storage/storage.service';


@Component({
  selector: 'app-modal-add-producto',
  templateUrl: './modal-add-producto.component.html',
  styleUrls: ['./modal-add-producto.component.scss']
})
export class ModalAddProductoComponent implements OnInit {

  // Estado de la descargar (desabilita el boton de aceptar)
  stateDownload: boolean = false;

  // Formulario
  formulario: FormGroup
  porcentaje: any = 0;

  // Categorias
  opciones: string[] = [];
  categorias!: ICategoriaId[];

  // Referencia
  referencia: any;

  // img para previsualizar
  imagen!: any;
  
  // Link imagen
  imagenRef!:string;
  
  // Path de la imagen
  imagen_path: string;
  opcionSeleccionada!: string;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private $productoServ: ProductoService,
    private $categoriaServ: CategoriasService,
    private $storage: StorageService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      precio: ["", Validators.required],
      categoria: ["", Validators.required],
      descripcion: ["", Validators.required],
    })
    this.imagen_path = ""



  }


  ngOnInit() {
    this.opciones = []
    this.$categoriaServ.getCategorias().subscribe(resp => {
      this.categorias = resp
      for (let categoria of this.categorias) {
        this.opciones.push(categoria.categoria)
      }
    })


    this.imagen = "../../../assets/previsualizacion__imagen.png"
  }
  // Cierro el modal
  cancelModal() {
    this.ref.close()
  }

  // Acepto los cambios
  submit() {
    // Compruebo que el formulario es valido
    if(this.formulario.valid && this.imagenRef){
      // Creo la nueva informacion
      const producto: IProducto = {
        nombre: this.formulario.value.nombre,
        precio: this.formulario.value.precio,
        categoria: this.formulario.value.categoria,
        descripcion: this.formulario.value.descripcion,
        img: this.imagenRef,
        img_path: this.imagen_path,
        carousel:false,
      }
      // Agrego el producto
      this.$productoServ.addProducto(producto)
  
      // Mensaje de que se completo con exito 
      this.toast.success("Se agrego correctamente el producto a la base de datos", "Se agrego el producto", { positionClass: 'toast-bottom-right', closeButton: true })
      // Cierro el modal
      this.ref.close()
    }
    else{
      // Mensaje de que no lleno todos los campos
      this.toast.error("Porfavor rellene todos los campos","No completo el formulario",{ positionClass: 'toast-bottom-right', closeButton: true })
    }
  }

  //Selecciono la imagen 
  async selectImage(event: any) {
    // Cambio el estado para bloquear el boton
    this.stateDownload=true;

    const file = event.target.files[0];

    this.imagen_path = file.name;
    // Obtengo el base64 de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen = reader.result
    };


    // Subo la imagen
    // Crea la referencia
    this.referencia = this.$storage.referenciaCloudStorage(file.name);

    // sube la imagen
    await this.$storage.tareaCloudStorage(file.name, file);

    await this.referencia.getDownloadURL().toPromise().then((resp: any) => {
      this.imagenRef = resp;
    })
    // Cambio el estado para desbloquear el boton
    this.stateDownload = false;
  }

}
