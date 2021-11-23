import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AbrirModalService } from 'src/app/services/abrirModal/abrir-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  clickEventsubscription:Subscription;

  claseModal = "inactive";
  constructor(private abrirModal: AbrirModalService) {
    this.clickEventsubscription = this.abrirModal.getClickEvent().subscribe(() => {
      this.boton();
    })
  }

  ngOnInit(): void {
  }

  // Para abrir el modal
  boton() {

    if (this.claseModal == "inactive") {
      document.querySelector("body")?.classList.add("modalOpen")
      this.claseModal = "active"
    }
    else {
        document.querySelector("body")?.classList.remove("modalOpen")
        this.claseModal = "inactive"
    }
  }

}
