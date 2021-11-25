import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDatoLocal, IDatoLocalId } from 'src/app/interfaces/datoLocal/dato-local';

@Injectable({
  providedIn: 'root'
})
export class DatosLocalService {

  datos: Observable<IDatoLocalId[]>
  coleccionDatos: AngularFirestoreCollection<IDatoLocalId>;

  constructor(private firestore: AngularFirestore) {
    this.coleccionDatos = firestore.collection<IDatoLocalId>("datosLocal")

    this.datos = this.coleccionDatos.snapshotChanges().pipe(
      map(a => a.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as IDatoLocal;

        return { id, ...data }
      }))
    )
  }

  obtenterDatos() {
    return this.datos;
  }
  ObtenerDato(id:string) {
    return this.coleccionDatos.doc(id).snapshotChanges().pipe(
      map(a => {
        const id = a.payload.id;
        const data = a.payload.data() as IDatoLocal;

        return { id, ...data }
      })
    )
  }
  actualizarDatos(id: string, data: IDatoLocal) {
    return this.coleccionDatos.doc(id).update(data)
  }

  obtenerRedes(){
    return this.firestore.collection('datosLocal', ref =>{
      
    } ref.where('redSocial', '==', true)ref.where("name", "==", "Denver")).snapshotChanges().pipe(
      map(a=> a.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as IDatoLocal;

        return { id, ...data }
      }))
    )
  }

}
