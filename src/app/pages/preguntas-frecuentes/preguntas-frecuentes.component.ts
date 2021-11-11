import { Component, OnInit } from '@angular/core';
import { IPreguntaId } from 'src/app/interfaces/pregunta/pregunta';
import { PreguntasFrecuentesService } from 'src/app/services/preguntasFrecuentes/preguntas-frecuentes.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {

  preguntas!: IPreguntaId[];
  constructor(private $preguntaServ: PreguntasFrecuentesService) {
    this.$preguntaServ.getPreguntas().subscribe(resp=>{
      this.preguntas = resp
    })
  }

  ngOnInit(): void {
  }

}
