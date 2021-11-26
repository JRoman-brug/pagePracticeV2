import { Component, OnInit } from '@angular/core';
import { IDatoLocalId } from 'src/app/interfaces/datoLocal/dato-local';
import { DatosLocalService } from 'src/app/services/datosLocal/datos-local.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Nombre del negocio
  nombreNegocio!:string | undefined;
  // WhatsApp
  whatapp!:IDatoLocalId;
  // Redes Sociales
  datos!:IDatoLocalId[];

  constructor(private $datosServ:DatosLocalService) { 
    // Obtengo las redes sociales
    $datosServ.obtenerRedes().subscribe(resp=>{
      this.datos = resp
    })
    // Obtengo el nombre del negocio
    $datosServ.ObtenerDato("nombreNegocio").subscribe(resp=>{
      this.nombreNegocio = resp.informacion
    })
    // Obtengo el whatsapp
    $datosServ.ObtenerDato("whatsapp").subscribe(resp=>{
      this.whatapp = resp
    })
  }

  ngOnInit(): void {
  }
}
