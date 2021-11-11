import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategoria, ICategoriaId } from 'src/app/interfaces/categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // La coleccion de categoria
  categoria: Observable<ICategoriaId[]>;

  // Referencia de la coleccion
  categoriaCollection: AngularFirestoreCollection<ICategoria>

  constructor(private firestore: AngularFirestore) {
    this.categoriaCollection = firestore.collection("categorias")

    this.categoria = this.categoriaCollection.snapshotChanges().pipe(
      map(a => a.map(a => {
        const data = a.payload.doc.data() as ICategoria;
        const id = a.payload.doc.id;

        return { id, ...data }
      }))
    )
  }


  // Obtengo las categorias
  getCategorias() {
    return this.categoria;
  }

  // Agrego una categoria
  addCategoria(data: ICategoria) {
    return this.categoriaCollection.add(data)
  }

  deleteCategoria(id: string) {
    return this.categoriaCollection.doc(id).delete();
  }

}
