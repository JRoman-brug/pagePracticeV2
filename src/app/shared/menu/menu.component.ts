import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Menu settings
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IniciarSesionComponent } from 'src/app/modals/iniciar-sesion/iniciar-sesion.component';
import { AbrirModalService } from 'src/app/services/abrirModal/abrir-modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = "";
  @Output() myEvent = new EventEmitter();
  constructor(public dialogService: DialogService,private abrirModal:AbrirModalService) {
  }


  ngOnInit(): void {
  }

  abrirIniciarSesion(){
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

}
