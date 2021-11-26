import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Menu settings
import { DialogService } from 'primeng/dynamicdialog';
import { ModalContactoComponent } from 'src/app/modals/modal-contacto/modal-contacto.component';
import { AbrirModalService } from 'src/app/services/abrirModal/abrir-modal.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DatosLocalService } from 'src/app/services/datosLocal/datos-local.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = "";
  user: any;
  nombreTexto:string | undefined;

  
  constructor(
    public dialogService: DialogService,
    private abrirModal: AbrirModalService,
    private $authServ: AuthService,
    private $datosServ:DatosLocalService
  ) {
    // estado del usuario
    $authServ.getCurrentUser().subscribe(resp => {
      this.user = resp
    });
    // Obtengo el nombre del negocio
    $datosServ.ObtenerDato("nombreNegocio").subscribe(resp=>{
      this.nombreTexto = resp.informacion
    })
  }


  ngOnInit(): void {
  }

  abrirIniciarSesion() {
    this.abrirModal.sendClickEvent();
  }

  cambiarBoton() {
    if (this.menu == "active") {
      this.menu = ""
      console.log(this.menu)
    }
    else {
      this.menu = "active"
      console.log(this.menu)
    }
  }

  contacto(){
    this.dialogService.open(ModalContactoComponent,{
      header:"Contacto"
    })
  }
  logout() {
    this.$authServ.signOut()
  }
}
