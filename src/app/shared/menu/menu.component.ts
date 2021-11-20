import { Component, OnInit } from '@angular/core';

// Menu settings
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IniciarSesionComponent } from 'src/app/modals/iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = "";
 
  constructor(public dialogService: DialogService,) {
  }

  ngOnInit(): void {
  }

  abrirInicioSesion(){
    this.dialogService.open(IniciarSesionComponent,{
      header:"Iniciar sesión"
    })
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
