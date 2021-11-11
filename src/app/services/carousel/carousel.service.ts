import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICarousel, ICarouselId } from 'src/app/interfaces/carousel/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  basePath: string = "carousel"
  prueba: AngularFireStorageReference;

  // Imagenes del carousel
  carousel: Observable<ICarouselId[]>
  // Referencia de la coleccion 
  carouselCollection: AngularFirestoreCollection<ICarousel>
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage
  ) {
    // Referencia
    this.prueba = this.storage.ref("carousel")

    this.carouselCollection = firestore.collection<ICarousel>("carousel")

    // Obtengo los datos de firestore
    this.carousel = this.carouselCollection.snapshotChanges().pipe(
      map(a => a.map(a => {
        const data = a.payload.doc.data() as ICarousel;
        const id = a.payload.doc.id;

        return { id, ...data }
      }))
    )
  }

  // Obtengo todas las imagenes del carousel
  getImagenes() {
    return this.carousel
  }
  // Agrego una imagen al carousel
  addImagen(data: ICarousel) {
    this.carouselCollection.add(data);
  }

  // Elimino una imagen del carousel
  deleteImagen(id: string) {
    this.carouselCollection.doc(id).delete()
  }



  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(`carousel/${nombreArchivo}`, datos)
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.prueba.child(nombreArchivo);
  }

  eliminarArchivo(img: string) {
    return this.prueba.child(img).delete()
  }
}
