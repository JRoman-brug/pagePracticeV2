import { Component, OnInit } from '@angular/core';

// Toast
import { ToastrService } from 'ngx-toastr';

// Modals
import { DialogService } from 'primeng/dynamicdialog';
import { PreguntasFrecuentesAgregarComponent } from 'src/app/modals/preguntas-frecuentes-agregar/preguntas-frecuentes-agregar.component';

// Interfaces
import { IPregunta, IPreguntaId } from 'src/app/interfaces/pregunta/pregunta';

// Servicio de preguntass
import { PreguntasFrecuentesService } from 'src/app/services/preguntasFrecuentes/preguntas-frecuentes.service';
import { PreguntasFrecuentesEditarComponent } from 'src/app/modals/preguntas-frecuentes-editar/preguntas-frecuentes-editar.component';


@Component({
  selector: 'app-admin-preguntas-frecuentes',
  templateUrl: './admin-preguntas-frecuentes.component.html',
  styleUrls: ['./admin-preguntas-frecuentes.component.scss']
})
export class AdminPreguntasFrecuentesComponent implements OnInit {

  // Coleccion de preguntas
  preguntas!: IPreguntaId[];
  constructor(
    private $preguntaServ: PreguntasFrecuentesService,
    private dialogService: DialogService,
    private toast: ToastrService

  ) {
    // obtengo las preguntas de la base de datos
    $preguntaServ.getPreguntas().subscribe(resp => {
      this.preguntas = resp
    })
  }

  ngOnInit(): void {
  }

  // Agregar pregunta
  addPregunta(){
    // Verifico que version tiene
    if(this.preguntas.length<5){
      this.dialogService.open(PreguntasFrecuentesAgregarComponent,{closable:true,header:"Agregar pregunta"})
    }
    else{
      this.toast.error("Ha llegado al limite de preguntas, obtenga la version premium","Ha llegado al limite de pregunta",{positionClass: 'toast-bottom-right', closeButton: true })
    }
  }  

  // Editar pregunta
  editarPregunta(id:string){
    this.dialogService.open(PreguntasFrecuentesEditarComponent,{closable:true,header:"Editar pregunta",data:{
      id:id
    }})
  }

  // Eliminar pregunta
  deletePregunta(id:string){
    this.$preguntaServ.deletePregunta(id);
    this.toast.error("Se elimino correctamente la pregunta","Se elimino correctamente",{positionClass: 'toast-bottom-right', closeButton: true })
  }
}
