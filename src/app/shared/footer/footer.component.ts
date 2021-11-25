import { Component, OnInit } from '@angular/core';
import { IDatoLocalId } from 'src/app/interfaces/datoLocal/dato-local';
import { DatosLocalService } from 'src/app/services/datosLocal/datos-local.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  nombreNegocio="MasterNike"

  datos!:IDatoLocalId[];

  constructor(private $datosServ:DatosLocalService) { 
    $datosServ.obtenerRedes().subscribe(resp=>{
      this.datos = resp
    })
  }

  ngOnInit(): void {
  }

  assssss(){
    console.log(this.datos)
  }

}
