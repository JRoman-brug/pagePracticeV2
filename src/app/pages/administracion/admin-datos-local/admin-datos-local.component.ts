import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDatoLocal, IDatoLocalId } from 'src/app/interfaces/datoLocal/dato-local';
import { DatosLocalService } from 'src/app/services/datosLocal/datos-local.service';

@Component({
  selector: 'app-admin-datos-local',
  templateUrl: './admin-datos-local.component.html',
  styleUrls: ['./admin-datos-local.component.scss']
})
export class AdminDatosLocalComponent implements OnInit {

  datosLocal!: IDatoLocalId[]

  formulario: FormGroup;

  constructor(private $datosServices: DatosLocalService, private fb: FormBuilder) {
    this.formulario = fb.group({
      nombreNegocio: [""],
      direccionNegocio: [""],
      whatsApp: [""],
      instagram: [""],
      facebook: [""],
      mercadoLibre: [""],
    })
    $datosServices.obtenterDatos().subscribe(resp => {
      this.datosLocal = resp
    })
  }

  ngOnInit(): void {
    // Patcheo los datos de los inputs

    // nombreNegocio
    this.$datosServices.ObtenerDato("nombreNegocio").subscribe(resp => {
      this.formulario.patchValue({
        nombreNegocio: resp.informacion
      })
    })
    // direccionNegocio
    this.$datosServices.ObtenerDato("direccionNegocio").subscribe(resp => {
      this.formulario.patchValue({
        direccionNegocio: resp.informacion
      })
    })
    // Instagram
    this.$datosServices.ObtenerDato("instagram").subscribe(resp => {
      this.formulario.patchValue({
        instagram: resp.informacion
      })
    })
    // whatsApp
    this.$datosServices.ObtenerDato("whatsApp").subscribe(resp => {
      this.formulario.patchValue({
        whatsApp: resp.informacion
      })
    })
    // facebook
    this.$datosServices.ObtenerDato("facebook").subscribe(resp => {
      this.formulario.patchValue({
        facebook: resp.informacion
      })
    })
    // mercadoLibre
    this.$datosServices.ObtenerDato("mercadoLibre").subscribe(resp => {
      this.formulario.patchValue({
        mercadoLibre: resp.informacion
      })
    })

  }

  mostrarDato(id: string, stateDato?: boolean) {
    if (stateDato) {
      const dato: IDatoLocal = {
        activo: false,
      }

      this.$datosServices.actualizarDatos(id, dato);
    }
    else {
      const dato: IDatoLocal = {
        activo: true,
      }

      this.$datosServices.actualizarDatos(id, dato);
    }
  }
  guardarDato() {

    // whatsApp
    const nombreNegocio:IDatoLocal={
      informacion:this.formulario.value.nombreNegocio
    }
    this.$datosServices.actualizarDatos("nombreNegocio",nombreNegocio);

    // whatsApp
    const direccionNegocio:IDatoLocal={
      informacion:this.formulario.value.direccionNegocio
    }
    this.$datosServices.actualizarDatos("direccionNegocio",direccionNegocio);

    // whatsApp
    const instagram:IDatoLocal={
      informacion:this.formulario.value.instagram
    }
    this.$datosServices.actualizarDatos("instagram",instagram);

    // whatsApp
    const whatsApp:IDatoLocal={
      informacion:this.formulario.value.whatsApp
    }
    this.$datosServices.actualizarDatos("whatsApp",whatsApp);
    // whatsApp

    const facebook:IDatoLocal={
      informacion:this.formulario.value.facebook
    }
    this.$datosServices.actualizarDatos("facebook",facebook);

    // whatsApp
    const mercadoLibre:IDatoLocal={
      informacion:this.formulario.value.mercadoLibre
    }
    this.$datosServices.actualizarDatos("mercadoLibre",mercadoLibre);
  }

}
