import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/interfaces/fileUpload/file-upload';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private basePath = '/imagenProductos';
  constructor(private storage: AngularFireStorage) {

  }
  pushImageStorage(file:any){
    const filePath = `${this.basePath}/${file.name.replace(/ /g, "")}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file.file);

    return storageRef.getDownloadURL()
  }
}
