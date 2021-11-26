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
      whatsapp: [""],
      instagram: [""],
      facebook: [""],
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
    this.$datosServices.ObtenerDato("whatsapp").subscribe(resp => {
      this.formulario.patchValue({
        whatsapp: resp.informacion
      })
    })
    // facebook
    this.$datosServices.ObtenerDato("facebook").subscribe(resp => {
      this.formulario.patchValue({
        facebook: resp.informacion
      })
    })

  }

  guardarDato() {

    // nombreNegocio
    const nombreNegocio: IDatoLocal = {
      informacion: this.formulario.value.nombreNegocio
    }
    this.$datosServices.actualizarDatos("nombreNegocio", nombreNegocio);

    // direccionNegocio
    const direccionNegocio: IDatoLocal = {
      informacion: this.formulario.value.direccionNegocio
    }
    this.$datosServices.actualizarDatos("direccionNegocio", direccionNegocio);

    // instagram
    const instagram: IDatoLocal = {
      informacion: this.formulario.value.instagram
    }
    this.$datosServices.actualizarDatos("instagram", instagram);

    // whatsApp
    const whatsApp: IDatoLocal = {
      informacion: this.formulario.value.whatsapp
    }
    this.$datosServices.actualizarDatos("whatsapp", whatsApp);
    // facebook

    const facebook: IDatoLocal = {
      informacion: this.formulario.value.facebook
    }
    this.$datosServices.actualizarDatos("facebook", facebook);

  }

}
