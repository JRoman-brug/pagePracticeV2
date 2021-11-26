import { Component, OnInit } from '@angular/core';
import { IDatoLocal, IDatoLocalId } from 'src/app/interfaces/datoLocal/dato-local';
import { DatosLocalService } from 'src/app/services/datosLocal/datos-local.service';

@Component({
  selector: 'app-modal-contacto',
  templateUrl: './modal-contacto.component.html',
  styleUrls: ['./modal-contacto.component.scss']
})
export class ModalContactoComponent implements OnInit {

  whatsapp!: IDatoLocalId
  direccionNegocio!: IDatoLocalId
  nombreNegocio!: IDatoLocalId
  instagram!: IDatoLocalId
  facebook!: IDatoLocalId

  constructor(private $datosServ: DatosLocalService) {
    // Obtengo los datos de cada uno de los datos
    // direccionNegocio
    $datosServ.ObtenerDato("direccionNegocio").subscribe(resp => {
      this.direccionNegocio = resp
    })
    // facebook
    $datosServ.ObtenerDato("facebook").subscribe(resp => {
      this.facebook = resp
    })
    // instagram
    $datosServ.ObtenerDato("instagram").subscribe(resp => {
      this.instagram = resp
    })
    // nombreNegocio
    $datosServ.ObtenerDato("nombreNegocio").subscribe(resp => {
      this.nombreNegocio = resp
    })
    // WhatsApp
    $datosServ.ObtenerDato("whatsapp").subscribe(resp => {
      this.whatsapp = resp
    })
  }

  ngOnInit(): void {
  }

}
