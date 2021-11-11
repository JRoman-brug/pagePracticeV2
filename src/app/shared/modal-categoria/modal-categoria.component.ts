import { Component, OnInit } from '@angular/core';

// Formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Toast
import { ToastrService } from 'ngx-toastr';
// Intefaces de las categorias
import { ICategoria, ICategoriaId } from 'src/app/interfaces/categoria/categoria';

// Services de categoria
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.scss']
})
export class ModalCategoriaComponent implements OnInit {

  // Formulario
  formulario: FormGroup;

  // Categorias
  categorias!: ICategoriaId[];

  constructor(
    private $categoriaServ: CategoriasService,
    private fb: FormBuilder,
    private toast: ToastrService,

  ) {
    // 
    this.formulario = fb.group({
      categoria: ["", Validators.required]
    })
    // Obtengo las categorias
    this.$categoriaServ.getCategorias().subscribe(resp => {
      this.categorias = resp;
    })

  }

  ngOnInit(): void {
  }

  addCategoria(event: Event) {
    // Verifico si el formulario es valido 
    if (this.formulario.valid) {
      let bandCategoria

      // Verifico si no hay categorias repetidas
      for (let categoria of this.categorias) {
        if (categoria.categoria == this.formulario.value.categoria) {
          bandCategoria = true;
        }
      }

      if (bandCategoria) {
        // Mensaje de error si existe una categoria repetida
        this.toast.error("Ya existe la categoria", "Categoria repetida", { positionClass: 'toast-bottom-right', closeButton: true })
      }
      else {
        // Agrego la categoria
        const categoria: ICategoria = {
          categoria: this.formulario.value.categoria
        }
        this.formulario.reset()
        this.$categoriaServ.addCategoria(categoria)
        this.toast.success("Se agrego la categoria correctamente", "Categoria agregada", { positionClass: 'toast-bottom-right', closeButton: true })
      }
    }
    else {
      // Mensaje de error si el formulario esta vacio
      this.toast.error("Campo vacio, ingrese una categoria", "Categoria vacia", { positionClass: 'toast-bottom-right', closeButton: true })
    }
  }

  // Elimino una categorias
  deleteCategoria(id: string, categoria: string) {
    // Elimino la categoria
    this.$categoriaServ.deleteCategoria(id);

    // Mensaje de se elimino correctamente
    this.toast.error("Se elimino correctamente la categoria", "Categoria eliminada", { positionClass: 'toast-bottom-right', closeButton: true })
  }

}
