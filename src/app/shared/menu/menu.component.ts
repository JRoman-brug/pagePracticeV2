import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Menu settings
import { DialogService } from 'primeng/dynamicdialog';
import { AbrirModalService } from 'src/app/services/abrirModal/abrir-modal.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = "";
  user: any;

  @Output() myEvent = new EventEmitter();
  constructor(
    public dialogService: DialogService,
    private abrirModal: AbrirModalService,
    private $authServ: AuthService,
  ) {
    // estado del usuario
    $authServ.getCurrentUser().subscribe(resp => {
      this.user = resp
    });
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

  logout() {
    this.$authServ.signOut()
  }
}
