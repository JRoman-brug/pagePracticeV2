import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/interfaces/fileUpload/file-upload';
import { IProducto } from 'src/app/interfaces/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  selectedFiles?: FileList;
  formulario: FormGroup;

  constructor(
    private $storage: StorageService,
    private $productoServ: ProductoService,
    private fb: FormBuilder,
    private route:Router
  ) {
    this.formulario = fb.group({
      producto: ["", Validators.required],
      precio: ["", Validators.required],
      description: ["", Validators.required],
      categoria: ["", Validators.required],
      image: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

submit() {
    const producto: IProducto = {
      nombre: this.formulario.value.producto,
      precio: parseInt(this.formulario.value.precio),
      img: this.formulario.value.image,
      descripcion:this.formulario.value.description,
      categoria: this.formulario.value.categoria,

    }

    this.$productoServ.addProducto(producto)
    
    this.route.navigate(['Productos'])
  }
  // selectFile(event: any): void {
  //   this.selectedFiles = event.target.files;
  // }
  // subir(){
  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //     this.selectedFiles = undefined;
  //     this.$storage.pushImageStorage(file).subscribe(a=>{
  //       console.log(a)
  //     })
  //   }

  // }
}
