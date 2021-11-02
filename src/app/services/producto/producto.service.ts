import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

// RXJS library
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Interfaces 
import { IProducto, IProductoId } from 'src/app/interfaces/producto/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Datos de los productos
  private productos: Observable<IProductoId[]>

  // Variable para acceder a la coleccion de productos
  private productoCollection: AngularFirestoreCollection<IProducto>

  constructor(private firestore: AngularFirestore) {
    this.productoCollection = firestore.collection<IProducto>('productos');

    this.productos = this.productoCollection.snapshotChanges().pipe(
      map(a => a.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as IProducto;

        return { id, ...data }
      }))
    )
  }

  // Obtener todos los productos
  getProductos(): Observable<IProductoId[]> {
    return this.productos;
  }
  getProductosByCategoty(categoria: string) {
    return this.productoCollection.ref.where("categoria","==",categoria).get()
  }
  // Obtener un producto
  getProducto(id: string) {
    return this.productoCollection.doc(id).snapshotChanges().pipe(
      map(a => {
        const id = a.payload.id;
        const data = a.payload.data() as IProducto;
        return { id, ...data }
      })
    )
  }

  // Agregar un producto a la coleccion
  addProducto(data: IProducto) {
    this.productoCollection.add(data);
  }

  // Actualizar un producto
  updateProducto(id: string, data: IProducto) {
    this.productoCollection.doc(id).update(data);
  }

  // Eliminar un producto
  deleteProducto(id: string) {
    this.productoCollection.doc(id).delete()
  }
}
