import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPregunta } from 'src/app/interfaces/pregunta/pregunta';
import { PreguntasFrecuentesService } from 'src/app/services/preguntasFrecuentes/preguntas-frecuentes.service';

@Component({
  selector: 'app-preguntas-frecuentes-agregar',
  templateUrl: './preguntas-frecuentes-agregar.component.html',
  styleUrls: ['./preguntas-frecuentes-agregar.component.scss']
})
export class PreguntasFrecuentesAgregarComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private $preguntasServ: PreguntasFrecuentesService,
    private ref: DynamicDialogRef,
    private fb: FormBuilder,
    private toast: ToastrService

  ) {
    this.formulario = fb.group({
      pregunta: ["", Validators.required],
      respuesta: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.ref.close()
  }

  submit() {
    // Comprueba si el están todos los campos llenos
    if (this.formulario.valid) {
      const pregunta: IPregunta = {
        pregunta: this.formulario.value.pregunta,
        respuesta: this.formulario.value.respuesta
      }
      this.$preguntasServ.addPregunta(pregunta);
      this.toast.success("Se agrego correctamente la pregunta", "Se agrego correctamente", { positionClass: 'toast-bottom-right', closeButton: true })

      this.closeModal()
    }
    else {
      // Mensaje de error 
      this.toast.error("Porfavor rellene todos los campos", "Hay un campo vacío", { positionClass: 'toast-bottom-right', closeButton: true })
    }
  }
}
