import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/interfaces/fileUpload/file-upload';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  basePath: string = "productos"
  prueba: AngularFireStorageReference;

  constructor(
    private storage: AngularFireStorage
  ) {
    this.prueba = this.storage.ref("productos")
  }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(`productos/${nombreArchivo}`, datos)
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.prueba.child(nombreArchivo);
  }

  eliminarArchivo(img: string) {
    return this.prueba.child(img).delete()
  }
}
