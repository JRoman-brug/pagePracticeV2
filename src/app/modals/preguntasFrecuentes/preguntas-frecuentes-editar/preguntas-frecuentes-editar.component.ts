import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPregunta, IPreguntaId } from 'src/app/interfaces/pregunta/pregunta';
import { PreguntasFrecuentesService } from 'src/app/services/preguntasFrecuentes/preguntas-frecuentes.service';


@Component({
  selector: 'app-preguntas-frecuentes-editar',
  templateUrl: './preguntas-frecuentes-editar.component.html',
  styleUrls: ['./preguntas-frecuentes-editar.component.scss']
})
export class PreguntasFrecuentesEditarComponent implements OnInit {

  // Formulario
  formulario: FormGroup;

  // Datos de la pregunta
  pregunta!: IPreguntaId;
  id: string;
  constructor(
    private $preguntaServ: PreguntasFrecuentesService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private fb: FormBuilder,
    private toast: ToastrService

  ) {
    this.formulario = fb.group({
      pregunta: ["", Validators.required],
      respuesta: ["", Validators.required]
    });

    this.id = this.config.data.id;
    this.$preguntaServ.getPregunta(this.id).subscribe(resp => {
      this.formulario.patchValue({
        pregunta: resp.pregunta,
        respuesta: resp.respuesta
      })
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
      this.$preguntaServ.updatePregunta(this.id, pregunta);
      this.toast.success("Se agrego correctamente la pregunta", "Se agrego correctamente", { positionClass: 'toast-bottom-right', closeButton: true })

      this.closeModal()
    }
    else {
      // Mensaje de error 
      this.toast.error("Porfavor rellene todos los campos", "Hay un campo vacío", { positionClass: 'toast-bottom-right', closeButton: true })
    }
  }

}
