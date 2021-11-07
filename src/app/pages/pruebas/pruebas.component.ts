import { Component, OnInit } from '@angular/core';

// Reactive Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
;
import { IProducto } from 'src/app/interfaces/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  opciones:string[]=[
    "categoria1",
    "categoria2",
    "categoria3",
  ]
  formulario: FormGroup

  file: any;
  fileName: any;

  constructor(
    private firebaseStorage: StorageService,
    private fb: FormBuilder,
    private $productoServ: ProductoService,
    private route:Router
  ) {
    this.formulario = fb.group({
      nombre: ["", Validators.required],
      precio: ["", Validators.required],
      descripcion: ["", Validators.required],
      categoria: ["", Validators.required],
      img: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  seletedArchivo(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.fileName = event.target.files[0].name
    }
  }

  async uploadFile() {
    // crea la referencia 
    let reference = await this.firebaseStorage.referenciaCloudStorage(this.fileName);
    
    // sube la imagen
    await this.firebaseStorage.tareaCloudStorage(this.fileName, this.file); 



    await reference.getDownloadURL().toPromise().then(url=>{
      this.formulario.value.img = url
    })

    console.log(this.formulario.value.img)

    const producto: IProducto = {
      nombre: this.formulario.value.nombre,
      precio: this.formulario.value.precio,
      descripcion: this.formulario.value.descripcion,
      categoria: this.formulario.value.categoria,
      img: this.formulario.value.img,
    }

    this.$productoServ.addProducto(producto)
    console.log(producto)

    this.route.navigate(["Productos"])
  }

}
