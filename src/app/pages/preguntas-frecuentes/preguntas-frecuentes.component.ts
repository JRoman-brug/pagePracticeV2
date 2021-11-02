import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {

  preguntas = [
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    },
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    },
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    },
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    },
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    },
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    },
    {
      pregunta:"Pregunta 1",
      respuesta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum, nulla mollitia sint ipsa tenetur esse molestiae assumenda expedita aliquid?"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
