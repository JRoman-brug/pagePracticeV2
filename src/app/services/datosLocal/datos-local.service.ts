import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDatoLocal, IDatoLocalId } from 'src/app/interfaces/datoLocal/dato-local';

@Injectable({
  providedIn: 'root'
})
export class DatosLocalService {

  // Datos
  datos: Observable<IDatoLocalId[]>
  // Referencia de datos
  coleccionDatos: AngularFirestoreCollection<IDatoLocalId>;

  constructor(private firestore: AngularFirestore) {
    // Inicializo la referencia
    this.coleccionDatos = firestore.collection<IDatoLocalId>("datosLocal")

    // Obtengo los datos de la base datos
    this.datos = this.coleccionDatos.snapshotChanges().pipe(
      map(a => a.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as IDatoLocal;

        return { id, ...data }
      }))
    )
  }

  // Obtengo todos los datos
  obtenterDatos() {
    return this.datos;
  }
  // Obtengo un dato
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

  // Obtengo las redes sociales
  obtenerRedes(){
    return this.firestore.collection('datosLocal', ref => ref.where('redSocial', '==', true).where('informacion', '!=', "")).snapshotChanges().pipe(
      map(a=> a.map(a=>{
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as IDatoLocal;

        return { id, ...data }
      }))
    )
  }

}
