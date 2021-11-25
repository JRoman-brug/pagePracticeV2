import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AbrirModalService } from 'src/app/services/abrirModal/abrir-modal.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  formulario: FormGroup;

  clickEventsubscription: Subscription;

  user: any;

  claseModal = "inactive";
  constructor(
    private abrirModal: AbrirModalService,
    private $authServ: AuthService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    this.clickEventsubscription = this.abrirModal.getClickEvent().subscribe(() => {
      this.boton();
    })
    this.formulario = fb.group({
      mail: ["", Validators.required],
      password: ["", Validators.required]
    })
    $authServ.getCurrentUser().subscribe(resp => {
      this.user = resp
    });
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

  iniciarSesion() {
    // compruebo que todos los inputs tengan un valor
    if (this.formulario.valid) {
      this.$authServ.login(this.formulario.value.mail, this.formulario.value.password).then(resp => {
        this.toast.success("Se ha identificado", "Ha iniciado sesión correctamente", { positionClass: 'toast-bottom-right', closeButton: true });
        this.boton();
        console.log(this.user)
      })
        .catch(error => {
          // Error de mail/contraseña incorrectas 
          this.toast.error("Ha ingresado incorrectamente el email/contraseña, porfavor intente de nuevo", "Mail/contraseña incorrectos", { positionClass: 'toast-bottom-right', closeButton: true })
        })
    }
    else {
      console.log(this.formulario.value)
      // mensaje de error
      this.toast.error("Porfavor llene todos los campos para poder iniciar sesión", "Porfavor llene todos los campos", { positionClass: 'toast-bottom-right', closeButton: true })
    }
  }

  
}
