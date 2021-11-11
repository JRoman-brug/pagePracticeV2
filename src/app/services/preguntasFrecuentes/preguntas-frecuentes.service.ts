import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPregunta, IPreguntaId } from 'src/app/interfaces/pregunta/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasFrecuentesService {

  // Las preguntas
  preguntas: Observable<IPreguntaId[]>

  // Referencia de la coleccion
  preguntaCollection: AngularFirestoreCollection<IPregunta>

  constructor(private firestore: AngularFirestore) {
    // obtengo la referencia de la coleccion
    this.preguntaCollection = firestore.collection<IPregunta>("preguntas");

    // Obtengo las preguntas de la base de datos
    this.preguntas = this.preguntaCollection.snapshotChanges().pipe(
      map(a => a.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as IPregunta

        return { id, ...data };
      }))
    )
  }

  // Obtengo todas las preguntas
  getPreguntas() {
    return this.preguntas
  }

  // Obtengo una pregunta
  getPregunta(id: string) {
    return this.preguntaCollection.doc(id).snapshotChanges().pipe(
      map(a => {
        const id = a.payload.id
        const data = a.payload.data() as IPregunta

        return { id, ...data };
      }))
  }
  // Agrego un pregunta
  addPregunta(pregunta: IPregunta) {
    return this.preguntaCollection.add(pregunta);
  }

  // Actualizo una pregunta
  updatePregunta(id: string, pregunta: IPregunta) {
    return this.preguntaCollection.doc(id).update(pregunta);
  }
  // Elimino una pregunta
  deletePregunta(id: string) {
    return this.preguntaCollection.doc(id).delete()
  }
}
